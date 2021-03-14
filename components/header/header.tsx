import { FC, useCallback } from "react";
import Link from "next/link";
import { useStore } from "../../store";

const Header: FC = () => {
  const count = useStore(useCallback((state) => state.todos, [])).length;

  return (
    <header>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </nav>
      <span>Count: {count}</span>
      <div>{Math.random()}</div>
    </header>
  );
};

export { Header };
