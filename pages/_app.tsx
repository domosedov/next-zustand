import { FC, useRef } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Hydrate } from 'react-query/hydration'
import { AppProps } from 'next/app'
import 'focus-visible'
import '../styles/tailwind.css'
import { useBootstrapApp } from '../bootstrap'
import { ThemeProvider } from 'next-themes'
import { Layout } from '../components/layout'

const Application: FC<AppProps> = ({ Component, pageProps }) => {
  useBootstrapApp()
  const queryClientRef = useRef<QueryClient>()
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient()
  }

  return (
    <QueryClientProvider client={queryClientRef.current}>
      <Hydrate state={pageProps.dehydratedState}>
        <ThemeProvider attribute='class'>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </Hydrate>
    </QueryClientProvider>
  )
}

export default Application
