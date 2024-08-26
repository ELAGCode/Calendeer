import { FC, useEffect, useState } from "react";

export type calendarType = {
  props: string | any;
};

export type calendarCell = {
  dayNumber: number;
  hasSchedule: boolean;
  hasNote: boolean;
  note: {
      text: string;
  };
  schedule: {
      date: string;
      details: {};
  };
};

export type calendarCellObjectType = {
  currentMonthDays: number | undefined;
};

const daysInMonth = (year: number, month: number) =>
  new Date(year, month, 0).getDate();

const Calendar: FC<calendarType> = ({ }) => {


  const CalendarCellComponentFactory: FC<calendarCellObjectType> = ({
    currentMonthDays,
  }) => {
    if (currentMonthDays) {
      // create cells of empty objects
      const calendarCellObjects = Array(currentMonthDays).fill({});
      const calendarCellObjectsFilled = calendarCellObjects.map(
        (_cell, idx, _calendarCells) => {
          return {
            //0 based index -> calendar based index (1 based)
            dayNumber: idx + 1,
            hasSchedule: false,
            hasNote: true,
            note: { text: "test note" },
            //if schedule is true then schedule will be read and processed
            schedule: { date: "", details: {} },
          };
        }
      );

      return (
        <div>
          {calendarCellObjectsFilled.map((cell: calendarCell, index) => {
            return (
              <div onClick={(e) => handleCalendarCellClick(e, index) } key={index}>
                {cell.dayNumber} &nbsp;
                {cell.hasNote ? "hasNote:true " : "hasNote:false "}
                {cell.hasSchedule ? "hasSchedule:true " : "hasSchedule:false "}
                {cell?.note?.text}
              </div>
            );
          })}
        </div>
      );
    } else return <></>;
  };

  const handleCalendarCellClick = (e: any, index: number) => {
    console.log(index)
  }

  const [currentMonthDays, setCurrentMonthDays] = useState<number>();

  useEffect(() => {
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    setCurrentMonthDays(daysInMonth(year, month));
  }, []);

  return (
    <div>
      <CalendarCellComponentFactory currentMonthDays={currentMonthDays} />
    </div>
  );
};

export default Calendar;
