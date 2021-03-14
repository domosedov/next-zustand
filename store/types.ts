type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

type FilterEnum = "all" | "completed" | "active";

type Store = {
  todos: Todo[];
  visibilityFilter: FilterEnum;
  setVisibilityFilter: (filter: FilterEnum) => void;
  todoTitle: string;
  isLoading: boolean;
  addTodo: (todo: Todo) => void;
  setTodoTitle: (title: string) => void;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
  fetchTodos: () => Promise<void>;
  resetTodos: () => void;
};

export type {Todo, FilterEnum, Store}