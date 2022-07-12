<template>
  <el-container class="layout-container">
    <Aside />
    <el-container class="content-wrapper">
      <Header />
      <Main />
    </el-container>
  </el-container>
  <CloseFullScreen v-if="navTabs.tabFullScreen" />
</template>

<script setup lang="ts">
import Aside from '~/backend/components/aside.vue'
import Header from '~/backend/components/header.vue'
import Main from '~/backend/components/main.vue'
import CloseFullScreen from '~/backend/components/closeFullScreen.vue'
import useNavTabs from '~/store/useNavTabs'
const navTabs = useNavTabs()
</script>

<style scoped>
.layout-container {
  height: 100%;
  width: 100%;
}
.content-wrapper {
  flex-direction: column;
  width: 100%;
  height: 100%;
}
</style>
