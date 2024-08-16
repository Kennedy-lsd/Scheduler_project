import { Header } from "../components/Header"
import { pages } from "../components/Header"
import { GetDateId } from "../globalFunctions/getDateId"
import { SchedulerPopUp } from "./SchedulerPopUp"
import { SchedulerTable } from "./SchedulerTable"
import { useState } from "react"

export const Scheduler = () => {

  const [schedulerDate, setSchedulerDate] = useState<string>(GetDateId())

  function handleChanegScheduleDate(value: string){
    setSchedulerDate(value)
  }

  console.log("rerender")

  const [windowSate, setWindowState] = useState<boolean>(false)

  const [windowId, setWindowId] = useState<string | undefined>(undefined)

  return (
    <div style={{borderTop: "1px solid transparent"}}>
        <Header page={pages.SCHEDULER} />
        <main className="max-w-[150%] w-[150%] mt-[80px]">
          <div className="flex flex-col w-48">
            <label htmlFor="schedulerDate">Schedule for:</label>
            <input type="date" name="schedulerDate" onChange={(e) => handleChanegScheduleDate(e.target.value)}/>
          </div>

          <SchedulerTable date={schedulerDate} setState={setWindowState} setWindowId={setWindowId}></SchedulerTable>
          <SchedulerPopUp state={windowSate} setState={setWindowState} windowId={windowId} />
        </main>
    </div>
  )
}
