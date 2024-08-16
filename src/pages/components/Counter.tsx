import { useState } from "react";
import { updateLocalStorage } from "../globalFunctions/localStorage";
import { useEffect } from "react";

type CounterProps = {
  label: string;
};


const Counter = ({ label }: CounterProps) => {
  // Creates localstorage state during first render
  if (!localStorage.getItem(label)) {
    localStorage.setItem(label, "0");
  }

  const [counter, setCounter] = useState<number>(() => {
    const storedValue = localStorage.getItem(label);
    return storedValue ? JSON.parse(storedValue) : 0;
  });


function counterUpdate(value: string) {
    switch (true) {
      case value === "-":
        setCounter((c) => (c -= 1));
        break;
      case value === "+":
        setCounter((c) => (c += 1));
        break;
      case value === "-10":
        setCounter((c) => (c -= 10));
        break;
      case value === "+10":
        setCounter((c) => (c += 10));
        break;
      default:
        console.error(`Value: ${value} is not acceptable`);
        break;
    }
  }

  // Updates localstorage every mount and conuter state update
  useEffect(() => {
    updateLocalStorage(label, counter);

    return () => {};
  }, [counter]);

  return (
    <main>
      <span className="counter_label">{label}</span>

      <div className="bg-secondary-blue rounded-full w-40 h-40 border-2 border-primary-blue flex flex-col justify-center counter">
        <div className="flex justify-evenly text-center">
          <button
            className="counter_btn top"
            onClick={() => {
              counterUpdate("-");
            }}
          >
            -
          </button>
          <button
            className="counter_btn top"
            onClick={() => {
              counterUpdate("+");
            }}
          >
            +
          </button>
        </div>
        <div className=" h-12 flex justify-center items-center">
          <div
            className="h-12 w-24 bg-primary-blue text-center text-primary-white text-3xl"
            style={{ lineHeight: "3rem" }}
            id={`counterValue${label}`}
          >
            {counter}
          </div>
        </div>
        <div className="flex justify-evenly text-center">
          <button
            className="counter_btn bottom"
            onClick={() => {
              counterUpdate("-10");
            }}
          >
            -10
          </button>
          <button
            className="counter_btn bottom"
            onClick={() => {
              counterUpdate("+10");
            }}
          >
            +10
          </button>
        </div>
      </div>
    </main>
  );
};

export default Counter;
