import { useEffect } from 'react'
import { TODOS_STORAGE_KEY } from './constants'
import { __IS_SSR__ } from './env'
import { Todo, useInitTodos } from './store/todo'

const useBootstrapApp = () => {
  const initTodos = useInitTodos()
  useEffect(() => {
    if (!__IS_SSR__) {
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
