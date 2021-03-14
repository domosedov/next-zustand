import { useEffect } from 'react'
import { IS_SSR, TODOS_STORAGE_KEY } from './constants'
import { Todo, useInitTodos } from './store'

const useBootstrapApp = () => {
  const initTodos = useInitTodos()

  useEffect(() => {
    if (!IS_SSR) {
      const storageTodos = window.localStorage.getItem(TODOS_STORAGE_KEY)
      let todos: Todo[]
      if (storageTodos) {
        try {
          todos = JSON.parse(storageTodos)
        } catch (err) {
          todos = []
        }
        initTodos(todos)
      } else {
        initTodos([])
      }
    }
  }, [initTodos])
}

export { useBootstrapApp }
