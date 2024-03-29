<template>
  <el-scrollbar ref="verticalMenusRef" class="vertical-menus-scrollbar">
    <el-menu
      class="layouts-menu-vertical"
      :collapse-transition="false"
      :unique-opened="config.layout.menuUniqueOpened"
      :default-active="state.defaultActive"
      :collapse="config.layout.menuCollapse"
      :background-color="config.layout.menuBackground"
      :text-color="config.layout.menuColor"
      :active-text-color="config.layout.menuActiveColor"
    >
      <MenuTree :menus="navTabs.menuTabs" />
    </el-menu>
  </el-scrollbar>
</template>

<script setup lang="ts">
import MenuTree from './menuTree.vue'
import { RouteLocationNormalizedLoaded } from 'vue-router'
import type { ElScrollbar } from 'element-plus'
import useConfig from '~/store/useConfig'
import useNavTabs from '~/store/useNavTabs'

const config = useConfig()
const navTabs = useNavTabs()
const route = useRoute()

const verticalMenusRef = ref<InstanceType<typeof ElScrollbar>>()

const state = reactive({
  defaultActive: '',
})

const verticalMenusScrollbarHeight = computed(() => {
  let menuTopBarHeight = 0
  if (config.layout.menuShowTopBar) {
    menuTopBarHeight = 50
  }
  if (config.layout.layoutMode == 'Default') {
    return 'calc(100vh - ' + (32 + menuTopBarHeight) + 'px)'
  } else {
    return 'calc(100vh - ' + menuTopBarHeight + 'px)'
  }
})

// 激活当前路由的菜单
const currentRouteActive = (currentRoute: RouteLocationNormalizedLoaded) => {
  state.defaultActive = currentRoute.path
}

// 滚动条滚动到激活菜单所在位置
const verticalMenusScroll = () => {
  nextTick(() => {
    let activeMenu: HTMLElement | null = document.querySelector(
      '.el-menu.layouts-menu-vertical li.is-active'
    )
    if (!activeMenu) return false
    verticalMenusRef.value?.setScrollTop(activeMenu.offsetTop)
  })
}

onMounted(() => {
  currentRouteActive(route)
  verticalMenusScroll()
})

watch(route, (to) => {
  currentRouteActive(to)
})
</script>
<style>
.vertical-menus-scrollbar {
  height: v-bind(verticalMenusScrollbarHeight);
}
.layouts-menu-vertical {
  border: 0;
}
</style>
