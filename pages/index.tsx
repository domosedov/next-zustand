import { FC } from 'react'
import { Container } from '../components/shared/ui/container'

const HomePage: FC = () => {
  return (
    <Container>
      <div className='bg-green-500 h-full'>
        <h1>Welcome</h1>
      </div>
    </Container>
  )
}

export { HomePage as default }
