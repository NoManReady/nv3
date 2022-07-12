import { defineStore } from 'pinia'
import { INavState, ITabRoute } from './types/navTabs'
import { RouteLocationNormalized } from 'vue-router'
const store = defineStore('navTabs', {
  state: (): INavState => {
    return {
      // 激活tab的index
      activeIndex: 0,
      // 激活的tab
      activeRoute: null,
      // tab列表
      tabs: [],
      // 当前tab是否全屏
      tabFullScreen: false,
      menuTabs: [],
    }
  },
  actions: {
    addTab(route: RouteLocationNormalized | ITabRoute) {
      const state = this.state as INavState
      for (const tab of state.tabs) {
        if (tab.path === route.path) {
          tab.params = route.params
          tab.query = route.query
          return
        }
      }
    },
    setFullScreen(isFullscreen: boolean) {
      const state = this.state as INavState
      state.tabFullScreen = isFullscreen
    },
  },
})

export default store
