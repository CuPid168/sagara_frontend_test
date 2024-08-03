import '@mantine/dates/styles.css'
import '@mantine/charts/styles.css'
import '@mantine/notifications/styles.css'
import '@mantine/dropzone/styles.css'
import '@mantine/core/styles.css'

import { Notifications } from '@mantine/notifications'
import type { AppProps } from 'next/app'
import { createTheme, MantineProvider } from '@mantine/core'
import { Inter } from 'next/font/google'
import { ModalsProvider } from '@mantine/modals'

const inter = Inter({ subsets: ['latin'] })

const theme = createTheme({
  colors: {
    primary: [
      '#EBBCC7',
      '#D992A2',
      '#C8697E',
      '#B63F59',
      '#A51535',
      '#84112A',
      '#630D20',
      '#420815',
      '#21040B',
      '#000000',
    ],
  },

  primaryShade: 4,
  primaryColor: 'primary',
  fontFamily: inter.style.fontFamily,
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={theme}>
      <ModalsProvider>
        <Notifications />
        <Component {...pageProps} />
      </ModalsProvider>
    </MantineProvider>
  )
}
