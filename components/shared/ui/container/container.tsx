import { FC } from 'react'

const Container: FC = ({ children }) => {
  return <div className='container max-w-screen-lg'>{children}</div>
}

export { Container }
