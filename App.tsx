import { ThemeProvider } from 'styled-components/native'
import { defaultTheme } from './src/common/constants/styles/theme/defaultTheme'
import { Text } from 'react-native'
export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Text>ok</Text>
    </ThemeProvider>
  )
}
