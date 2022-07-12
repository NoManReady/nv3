export enum ELayoutMode {
  Default = 'Default',
  Classic = 'Classic',
  Streamline = 'Streamline',
}

export enum EMainAnimation {
  slideRight = 'slide-right',
  slideLeft = 'slide-left',
  elFadeInLinear = 'el-fade-in-linear',
  elFadeIn = 'el-fade-in',
  elZoomInCenter = 'el-zoom-in-center',
}

export interface ILayout {
  // app
  showDrawer: boolean
  shrink: boolean
  layoutMode: ELayoutMode
  mainAnimation: EMainAnimation
  // menu
  menuWidth: number
  menuDefaultIcon: string
  menuCollapse: boolean
  menuUniqueOpened: boolean
  menuShowTopBar: boolean
  menuBackground: string
  menuColor: string
  menuActiveBackground: string
  menuActiveColor: string
  menuTopBarBackground: string
  // header
  headerBarTabColor: string
  headerBarBackground: string
  headerBarHoverBackground: string
  headerBarTabActiveBackground: string
  headerBarTabActiveColor: string
}

export interface ILang {
  defaultLang:string,
  fallbackLang:string,
  langArray:Array<Record<string, string>>
}
