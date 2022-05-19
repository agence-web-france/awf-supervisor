import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'

import type { AppProps } from 'next/app'
import { NextUIProvider } from '@nextui-org/react'
import { ToastContainer } from 'react-toastify'
import { NextPage } from 'next'
import { ReactElement, ReactNode } from 'react'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  return getLayout((
    <NextUIProvider>
      <Component {...pageProps} />
      <ToastContainer />
    </NextUIProvider>
  ))
}

export default MyApp
