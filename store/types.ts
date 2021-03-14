type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

type FilterEnum = "all" | "completed" | "active";

type Store = {
  todos: Todo[];
  visibilityFilter: FilterEnum;
  todoTitle: string;
  isLoading: boolean;
  initTodos: (initialTodos: Todo[]) => void;
  setVisibilityFilter: (filter: FilterEnum) => void;
  addTodo: (todo: Todo) => void;
  setTodoTitle: (title: string) => void;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
  fetchTodos: () => Promise<void>;
  resetTodos: () => void;
};

export type { Todo, FilterEnum, Store };
