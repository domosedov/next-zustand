import { FC, FormEvent, useCallback } from 'react'
import { Counter } from '../components/counter'
import { useStore, useTodoAPI } from '../store'

const Home: FC = () => {
  const todos = useStore(useCallback(state => state.todos, []))
  const { add } = useTodoAPI()
  const title = useStore(useCallback(state => state.todoTitle, []))
  const setTitle = useStore(useCallback(state => state.setTodoTitle, []))
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    add({ id: Date.now(), title, completed: false })
    setTitle('')
  }

  return (
    <div>
      <h1>Home Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={title}
          onChange={evt => setTitle(evt.target.value)}
        />
        <button type='submit'>Add Todo</button>
      </form>
      <Counter />
      <div>
        <pre>{JSON.stringify(todos, null, 2)}</pre>
      </div>
      <div>{Math.random()}</div>
    </div>
  )
}

export { Home as default }
