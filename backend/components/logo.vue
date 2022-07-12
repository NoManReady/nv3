<template>
  <div class="layout-logo">
    <template v-if="!config.layout.menuCollapse">
      <img class="logo-img" src="https://cdn-bgp.bluestacks.com/BGP/us/gametiles_com.bws.jpg?2022-07-11T19:09:03" alt="logo" />
      <div :style="{ color: config.layout.menuActiveColor }" class="website-name">
        {{ siteConfig.siteName }}
      </div>
    </template>
    <el-icon
      v-if="config.layout.layoutMode != 'Streamline'"
      @click="onMenuCollapse"
      :class="config.layout.menuCollapse ? 'unfold' : ''"
      :color="config.layout.menuActiveColor"
      size="18"
      class="fold"
      ><Expand v-if="config.layout.menuCollapse" /><Fold v-else
    /></el-icon>
  </div>
</template>

<script setup lang="ts">
import { Expand, Fold } from '@element-plus/icons-vue'
import useConfig from '~/store/useConfig'
import useSiteConfig from '~/store/useSiteConfig'

const config = useConfig()
const siteConfig = useSiteConfig()

const onMenuCollapse = function () {
  config.setLayout('menuCollapse', !config.layout.menuCollapse)
}
</script>

<style scoped lang="scss">
.layout-logo {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 10px;
  background: v-bind(
    'config.layout.layoutMode != "Streamline" ? config.layout.menuTopBarBackground:"transparent"'
  );
}
.logo-img {
  width: 28px;
  height: 28px;
  border-radius: 50%;
}
.website-name {
  padding-left: 4px;
  font-size: var(--el-font-size-extra-large);
  font-weight: 600;
}
.fold {
  margin-left: auto;
}
.unfold {
  margin: 0 auto;
}
</style>
