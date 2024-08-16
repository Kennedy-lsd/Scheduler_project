import { useState } from "react";

export const colorsArray = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "black",
  "purple",
];

export const textColorsArray = [
  "black",
  "gray",
  "white",
  "red",
  "green",
  "blue",
];

type SchedulerPopUpProps = {
  state: boolean;
  setState: (state: boolean) => void;
  windowId: string | undefined;
};

export const SchedulerPopUp = ({
  state,
  setState,
  windowId,
}: SchedulerPopUpProps) => {
  const [inputBg, setInputBg] = useState<string>("white");

  const [inputColor, setInputColor] = useState<string>("black");

  document.body.style.overflow = state ? "hidden" : ""

  return (
    <>
      {state ? (
        <div
          className={`flex justify-center items-center absolute w-full h-screen`}
          style={{ top: window.scrollY + "px", left: window.scrollX + "px" }}
        >
          <div
            className="w-full h-screen absolute z-30 bg-slate-600 opacity-70 top-0 left-0"
            onClick={() => setState(false)}
          ></div>
          <div className="rounded-xl border-4 border-black w-3/5 h-5/6 z-50 bg-primary-blue opacity-100 relative">
            <div className="flex max-w-[50%] w-full mx-auto flex-col mt-10">
              <div className="text-4xl font-bold text-center text-white mt-5">
                Setting task for:
              </div>
              <div className="text-4xl font-bold text-center text-white mt-5">
                {windowId?.split("_")[0]}
              </div>
              <div className="text-4xl font-bold text-center text-white mt-5">
                {windowId?.split("_")[1]}
              </div>
            </div>
            <div className="mx-auto flex mt-30 justify-center">
              <input
                type="text"
                className="w-[400px] h-[60px] block text-4xl pl-1 rounded-l-[10px]"
                style={{ backgroundColor: inputBg, color: inputColor }}
              />
              <button className="bg-green-500 w-[120px] rounded-r-[10px]">Add</button>
            </div>

            <div className="max-w-[50%] w-fit mx-auto mt-10">
              <div className="text-center text-4xl font-bold my-6 text-white">
                Bg:
              </div>
              <div className="flex justify-between">
                {colorsArray.map((el: string, index: number) => (
                  <div
                    className="rounded-full w-10 h-10 cursor-pointer"
                    style={{ backgroundColor: el }}
                    onClick={() => {
                      setInputBg(el);
                    }}
                  ></div>
                ))}
              </div>
            </div>
            <div className="max-w-[50%] w-fit mx-auto mt-10">
              <div className="text-center text-4xl font-bold my-6 text-white">
                Text:
              </div>
              <div className="flex justify-between">
                {textColorsArray.map((el: string, index: number) => (
                  <div
                    className="rounded-full w-10 h-10 cursor-pointer"
                    style={{ backgroundColor: el }}
                    onClick={() => {
                      setInputColor(el);
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
