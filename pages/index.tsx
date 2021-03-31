import { FC, useReducer } from 'react'
import { Button } from '../components/shared/ui/button'
import { Animated } from '../components/shared/ui/animated'
import { Container } from '../components/shared/ui/container'

const HomePage: FC = () => {
  const [open, toggle] = useReducer(o => !o, false)
  return (
    <Container>
      <div className='bg-green-500 h-full'>
        <h1>Welcome</h1>
        <Button size='big' onClick={toggle}>
          Click me!
        </Button>
        <Animated
          show={open}
          enter='animate-zoomIn'
          leave='animate-zoomOut'
          duration='500ms'
        >
          <p className='bg-green-900'>
            Далеко-далеко, за словесными горами в стране гласных и согласных
            живут рыбные тексты. Родного рыбными жизни переулка щеке ему, семь,
            он рекламных ведущими деревни злых это своих живет прямо lorem эта
            если ее заголовок пустился по всей языкового послушавшись.
            Всемогущая вопрос дороге составитель текст они ее толку то. По всей
            путь алфавит не ручеек что?
          </p>
        </Animated>
      </div>
    </Container>
  )
}

export default HomePage
