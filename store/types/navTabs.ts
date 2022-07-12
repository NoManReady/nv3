import type { Component } from 'vue'

export interface ITabRoute {
  title: string
  path: string
  name?: string
  type?: string
  icon?: string
  keepAlive?: string
  query: Record<string, any>
  params: Record<string, any>
  children?: ITabRoute[]
  component?: Component
}

export interface INavState {
  activeIndex: number
  activeRoute: ITabRoute
  tabs: Array<ITabRoute>
  tabFullScreen: boolean
  menuTabs: Array<ITabRoute>
}
