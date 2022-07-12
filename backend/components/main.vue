<template>
  <el-main class="layout-main">
    <el-scrollbar
      class="layout-main-scrollbar"
      :style="{ height: `calc(100vh - 60px)` }"
      ref="mainScrollbarRef"
    >
      <nuxt-page :page-key="state.componentKey"/>
    </el-scrollbar>
  </el-main>
</template>

<script setup lang="ts">
import useConfig from '~/store/useConfig'

const route = useRoute()
const config = useConfig()

const state: {
  componentKey: string
  keepAliveComponentNameList: string[]
} = reactive({
  componentKey: route.path,
  keepAliveComponentNameList: [],
})

watch(
  () => route.path,
  () => {
    state.componentKey = route.path
  }
)
</script>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'layout/main',
})
</script>

<style scoped lang="scss">
.layout-container .layout-main {
  padding: 0 !important;
  overflow: hidden;
  width: 100%;
  height: 100%;
}
.layout-main-scrollbar {
  width: 100%;
  position: relative;
  overflow: hidden;
}
</style>
