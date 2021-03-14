import { FC } from 'react'
import { AppProps } from 'next/app'
import 'focus-visible'
import '../styles/tailwind.css'
import { Header } from '../components/header'
import { useBootstrapApp } from '../bootstrap'
import { ThemeProvider } from 'next-themes'

const Application: FC<AppProps> = ({ Component, pageProps }) => {
  useBootstrapApp()

  return (
    <ThemeProvider attribute='class'>
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default Application
