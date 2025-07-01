import { useDispatch, useSelector } from "react-redux";
import styles from "./Home.module.scss";
import type { AppDispatch, RootState } from "../../redux/store";
import { increment } from "../../redux/slices/counterSlice";

export function Home() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <>
      {/* This is an example usage of module css */}
      <h1 className={styles.header}>{count}</h1>
      <button onClick={() => dispatch(increment())}>Click Me</button>
    </>
  );
}
