import { FC } from 'react'
import { Content } from '../content'
import { Footer } from '../footer'
import { Header } from '../header'

const Layout: FC = ({ children }) => {
  return (
    <div className='grid grid-rows-[auto,1fr,auto] min-h-screen'>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </div>
  )
}

export { Layout }
