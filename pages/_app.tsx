import { FC } from 'react'
import { AppProps } from 'next/app'
import '../styles/globals.css'
import { Header } from '../components/header'
import { useBootstrapApp } from '../bootstrap'

const Application: FC<AppProps> = ({ Component, pageProps }) => {
  useBootstrapApp()

  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default Application
