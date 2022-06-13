import { useCounter } from "../hooks/useCounter";
import ButtonCounter from "./ButtonCounter";

const Counter = () => {
  const { counter, handleModifyCounter, handleReset } = useCounter();

  return (
    <>
      <div className="container text-center mt-4">
        {/* eslint-disable-next-line */}
        <h2 role="counter">Counter: {counter}</h2>

        <ButtonCounter
          name="decrementar"
          btnstyle="btn btn-outline-danger"
          action={handleModifyCounter}
          value={-1}
        />

        <button
          aria-label="reset"
          className="btn btn-outline-dark m-1"
          onClick={handleReset}
        >
          Reset
        </button>

        <ButtonCounter
          name="incrementa"
          btnstyle="btn btn-outline-success"
          action={handleModifyCounter}
        />
      </div>
    </>
  );
};

export default Counter;
