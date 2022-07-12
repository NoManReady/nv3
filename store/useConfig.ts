import { defineStore } from 'pinia'
import { ILayout, ILang, ELayoutMode, EMainAnimation } from './types/config'

type IState = {
  layout: ILayout
  lang: ILang
}
const store = defineStore('config', {
  state: (): IState => ({
    layout: {
      /*app */
      showDrawer: false,
      // 是否收缩布局(小屏设备)
      shrink: false,
      // 后台布局方式
      layoutMode: ELayoutMode.Classic,
      // 页面切换动画
      mainAnimation: EMainAnimation.elFadeIn,

      /*menu */
      // 侧边菜单背景色
      menuBackground: '#fff',
      // 侧边菜单文字颜色
      menuColor: '#303133',
      // 侧边菜单激活项背景色
      menuActiveBackground: '#fff',
      // 侧边菜单激活项文字色
      menuActiveColor: '#409eff',
      // 侧边菜单顶栏背景色
      menuTopBarBackground: '#fcfcfc',
      // 侧边菜单宽度(展开时)，单位px
      menuWidth: 260,
      // 侧边菜单项默认图标
      menuDefaultIcon: 'Bell',
      // 是否水平折叠收起菜单
      menuCollapse: false,
      // 是否只保持一个子菜单的展开(手风琴)
      menuUniqueOpened: false,
      // 显示菜单栏顶栏(LOGO)
      menuShowTopBar: true,

      /*headerBar */
      // 顶栏背景色
      headerBarBackground: '#fff',
      // 顶栏悬停时背景色
      headerBarHoverBackground: '#f5f5f5',
      // 顶栏文字色
      headerBarTabColor: '#000',
      // 顶栏激活项文字色
      headerBarTabActiveColor: '#000',
      // 顶栏激活项背景色
      headerBarTabActiveBackground: '#fff',
    },
    lang: {
      defaultLang: 'zh-cn',
      fallbackLang: 'zh-cn',
      langArray: [
        {
          name: 'zh-cn',
          value: '简体中文',
        },
        {
          name: 'fr',
          value: '法语',
        },
        {
          name: 'en',
          value: 'English',
        },
      ],
    },
  }),
  getters: {
    menuWidth(state): string {
      const { shrink, menuCollapse, menuWidth } = state.layout
      if (shrink) {
        return menuCollapse ? '0px' : `${menuWidth}px`
      }
      return menuCollapse ? '64px' : `${menuWidth}px`
    },
  },
  actions: {
    setLang(lang: string): void {
      const langConfig = this.lang as ILang
      langConfig.defaultLang = lang
    },
    setLayoutMode(mode: ELayoutMode): void {
      const layout = this.layout as ILayout
      layout.layoutMode = mode
      if (mode === ELayoutMode.Classic && layout.headerBarBackground === '#fff') {
        layout.headerBarTabActiveBackground = '#f5f5f5'
      } else if (
        mode === ELayoutMode.Default &&
        layout.headerBarBackground === '#fff' &&
        layout.headerBarTabActiveBackground === '#f5f5f5'
      ) {
        layout.headerBarTabActiveBackground = '#fff'
      }
    },
    setLayout(name: keyof ILayout, value: any) {
      const layout = this.layout as ILayout
      layout[name] = value as never
    },
  },
})

export default store
