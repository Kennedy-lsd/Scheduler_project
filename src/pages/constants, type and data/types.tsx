export type tasksForWeekType = taskForDayScheduled[]

export type taskForDayScheduled = { 
    date: string;
    id: number;
    tasks: {
      time: string;
      id: number;
      task: {
        accurateTime: string;
        taskText: string;
        bgColor: string;
        textColor: string;
        id: number;
      }[];
    }[]
    type: string;
  } | {}

  export type taskForDay = {
    date: string;
    task:string;
    type: string;
    id: number;
  }

  export type counterData = {
    name: string;
    count: number;
    createdDate: string;
    id: number;
  }