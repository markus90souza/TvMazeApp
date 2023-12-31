import 'styled-components/native'
declare module 'styled-components/native' {
  export type ColorPalette =
    | 'primary'
    | 'secondary'
    | 'onSecondary'
    | 'surface'
    | 'caption'
    | 'brand'
    | 'alert'

  export interface DefaultTheme {
    colors: {
      primary: string
      secondary: string
      onSecondary: string
      surface: string
      caption: string
      brand: string
      alert: string
    }
    borders: {
      radius: {
        small: number
        xxxlarge: number
      }
    }
    spacing: {
      sm: number
      md: number
      lg: number
    }
  }
}
