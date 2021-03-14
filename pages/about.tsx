import { FC, FormEvent, useCallback } from "react";
import { useStore } from "../store";

const About: FC = () => {
  const todos = useStore(useCallback((state) => state.todos, []));
  const addTodo = useStore(useCallback((state) => state.addTodo, []));
  const title = useStore(useCallback((state) => state.todoTitle, []));
  const setTitle = useStore(useCallback((state) => state.setTodoTitle, []));
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    addTodo({ id: Date.now(), title, completed: false });
    setTitle("");
  };

  return (
    <div>
      <h1>About Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(evt) => setTitle(evt.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
      <div>
        <pre>{JSON.stringify(todos, null, 2)}</pre>
      </div>
      <div>{Math.random()}</div>
    </div>
  );
};

export { About as default };
