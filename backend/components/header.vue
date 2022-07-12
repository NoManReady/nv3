<template>
  <el-header v-if="!navTabs.tabFullScreen" class="layout-header">
    <DefaultNavBar />
  </el-header>
</template>
<script setup lang="ts">
import useNavTabs from '~/store/useNavTabs'
import DefaultNavBar from './navBar/default.vue'

const navTabs = useNavTabs()
</script>

<style scoped lang="scss">
.layout-header {
  height: auto;
  padding: 0;
}
</style>
