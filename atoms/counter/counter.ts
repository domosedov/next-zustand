import { atom } from "jotai";
import { atomWithReset } from "jotai/utils";

const count = atomWithReset(0);

const increment = atom<void, void>(null, (get, set) => set(count, get(count) + 1));

export { count, increment };
