import Counter from "../components/Counter";
import { DailyTasks } from "./DailyTasks";
import { Header } from "../components/Header";
import { pages } from "../components/Header";
import { DailyList } from "./DailyList";
import { WeeklyList } from "./WeeklyList";

export const Home = () => {

  return (
    <>
      <div className="overflow-hidden">
        <Header page={pages.HOME}/>
        <main className="m-3 w-full">

          {/* Counters */}
          <div className="w-full flex justify-evenly">

            <Counter label="Rode km" />

          </div>
          
          {/* tables */}
          <div className="w-full gap-3 flex">
          
            <DailyTasks />
            <div className="flex flex-col w-2/5">
              <DailyList />
              <WeeklyList />
            </div>

          </div>
        </main>
      </div>
    </>
  );
};
