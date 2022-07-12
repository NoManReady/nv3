<template>
  <div class="nav-menus" :class="configStore.layout.layoutMode">
    <div class="nav-menu-item">
      <el-icon :color="configStore.layout.headerBarTabColor" class="nav-menu-icon" size="18">
        <HomeFilled />
      </el-icon>
    </div>
    <ClientOnly>
      <el-dropdown
        style="height:100%;"
        size="large"
        :hide-timeout="50"
        placement="bottom"
        trigger="click"
        :hide-on-click="true"
      >
        <div class="nav-menu-item pt2">
          <el-icon
            :color="configStore.layout.headerBarTabColor"
            class="nav-menu-icon"
            name="local-lang"
            size="18"
            ><HotWater
          /></el-icon>
        </div>
        <template #dropdown>
          <el-dropdown-menu class="dropdown-menu-box">
            <el-dropdown-item
              v-for="item in configStore.lang.langArray"
              :key="item.name"
              @click="onLangClick(item.name)"
            >
              {{ item.value }}
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </ClientOnly>
    <div @click="onFullScreen" class="nav-menu-item" :class="state.isFullScreen ? 'hover' : ''">
      <el-icon
        :color="configStore.layout.headerBarTabColor"
        class="nav-menu-icon"
        v-if="state.isFullScreen"
        name="local-full-screen-cancel"
        size="18"
        ><HomeFilled
      /></el-icon>
      <el-icon
        :color="configStore.layout.headerBarTabColor"
        class="nav-menu-icon"
        v-else
        name="el-icon-FullScreen"
        size="18"
        ><HomeFilled
      /></el-icon>
    </div>
    <div class="admin-info">
      <el-avatar :size="25" fit="fill">
        <img :src="null" alt="" />
      </el-avatar>
      <div class="admin-name">Admin</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import screenfull from 'screenfull'
import { HomeFilled, HotWater } from '@element-plus/icons-vue'
import useConfig from '~/store/useConfig'
import { ElMessage } from 'element-plus'
import { useI18n } from 'vue-i18n'
// import Config from './config.vue'

const { locale } = useI18n()

const configStore = useConfig()

const state = reactive({
  isFullScreen: false,
  showLayoutDrawer: false,
})

const onFullScreen = () => {
  if (!screenfull.isEnabled) {
    ElMessage.warning('layout.Full screen is not supported')
    return false
  }
  screenfull.toggle()
  screenfull.onchange(() => {
    state.isFullScreen = screenfull.isFullscreen
  })
}

const onLangClick = (lang) => {
  locale.value = lang
}
</script>

<style scoped lang="scss">
.nav-menus.Default {
  border-radius: var(--el-border-radius-base);
  box-shadow: var(--el-box-shadow-light);
}
.nav-menus {
  display: flex;
  align-items: center;
  height: 100%;
  margin-left: auto;
  background-color: v-bind('configStore.layout.headerBarBackground');
  overflow: hidden;
  .nav-menu-item {
    height: 100%;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    .nav-menu-icon {
      box-sizing: content-box;
    }
    &:hover {
      .icon {
        animation: twinkle 0.3s ease-in-out;
      }
    }
  }
  .admin-info {
    display: flex;
    height: 100%;
    padding: 0 10px;
    align-items: center;
    cursor: pointer;
    user-select: none;
    color: v-bind('configStore.layout.headerBarTabColor');
  }
  .admin-name {
    padding-left: 6px;
  }
  .nav-menu-item:hover,
  .admin-info:hover,
  .nav-menu-item.hover,
  .admin-info.hover {
    background: v-bind('configStore.layout.headerBarHoverBackground');
  }
}
.dropdown-menu-box :deep(.el-dropdown-menu__item) {
  justify-content: center;
}
.admin-info-base {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 10px;
  .admin-info-other {
    display: block;
    width: 100%;
    text-align: center;
    padding: 10px 0;
    .admin-info-name {
      font-size: var(--el-font-size-large);
    }
  }
}
.admin-info-footer {
  padding: 10px 0;
  margin: 0 -12px -12px -12px;
  display: flex;
  justify-content: space-around;
  background: var(--color-bg-2);
}
.pt2 {
  padding-top: 2px;
}

@keyframes twinkle {
  0% {
    transform: scale(0);
  }
  80% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
</style>
