import { FC, useEffect, useState } from "react";

export type calendarType = {
  props: string | any;
};

export type calendarCellObjectType = {
  currentMonthDays: number | undefined;
};

export const daysInMonth = (year: number, month: number) =>
  new Date(year, month, 0).getDate();

const Calendar: FC<calendarType> = () => {
  const CalendarCellComponentFactory: FC<calendarCellObjectType> = ({currentMonthDays}) => {
    if (typeof currentMonthDays === "number") {
      const calendarCellObjects = Array(currentMonthDays).fill({
        test: "test",
      });
      return (
        <>
          {calendarCellObjects.map((val) => {
            return <>{val.test}</>;
          })}
        </>
      );
    } else return <></>;
  };

  const [currentMonthDays, setCurrentMonthDays] = useState<number>();

  useEffect(() => {
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    setCurrentMonthDays(daysInMonth(year, month));
  }, [currentMonthDays]);

  return (
    <div>
      <CalendarCellComponentFactory currentMonthDays={currentMonthDays} />
    </div>
  );
};

export default Calendar;
