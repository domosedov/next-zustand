import { FC } from "react";
import { useAtomValue, useResetAtom, useUpdateAtom } from "jotai/utils";
import { count, increment } from "../../atoms/counter";

const Counter: FC = () => {
  const counter = useAtomValue(count);
  const inc = useUpdateAtom(increment);
  const reset = useResetAtom(count);

  return (
    <div>
      <h1>Count: {counter}</h1>
      <button onClick={() => inc()}>+</button>
      <button onClick={() => reset()}>RESET</button>
    </div>
  );
};

export { Counter };
