import { FC, useEffect, useState } from "react";
import EditCellModal from "./EditCellModal";
import { mockData } from "./mockData";

export type calendarType = {
  calendarData: calendarCellType[] | any[];
};

export type calendarCellType = {
  day: number;
  month: number;
  year: number;
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

const month = new Date().getMonth();
const year = new Date().getFullYear();

const Calendar: FC<calendarType> = ({ calendarData }) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [calendarIndex, setCalendarIndex] = useState<number | undefined>();
  const [currentMonthDays, setCurrentMonthDays] = useState<number>();

  // create cells of empty objects
  const calendarCellObjects = Array(currentMonthDays).fill({});
  const calendarCellObjectsFilled = calendarCellObjects.map((_cell, idx) => {
    return {
      //0 based index -> calendar based index (1 based)
      day: idx + 1,
      month: 8,
      year: 2024,
      hasSchedule: false,
      hasNote: true,
      note: { text: "test note" },
      //if schedule is true then schedule will be read and processed
      schedule: { date: "", details: {} },
    };
  });

  useEffect(() => {
    setCurrentMonthDays(daysInMonth(year, month));
  }, [month, year]);

  const handleCalendarCellClick = (e: any, index: number) => {
    setModalOpen(true);
    setCalendarIndex(index);
  };

  const CalendarCellComponentFactory: FC<calendarCellObjectType> = ({
    currentMonthDays,
  }) => {
    if (currentMonthDays) {
      return (
        <div>
          {calendarCellObjectsFilled.map((cell: calendarCellType, index) => {
            return (
              <div
                onClick={(e) => handleCalendarCellClick(e, index)}
                key={index}
              >
                {/* {cell?.hasNote ? "hasNote:true " : "hasNote:false "}
                {cell?.hasSchedule ? "hasSchedule:true " : "hasSchedule:false "}
                {cell?.note?.text} */}
                {cell?.day}
                {cell.hasNote ? "*" : ""}
              </div>
            );
          })}
        </div>
      );
    } else return <></>;
  };

  return (
    <div>
      <CalendarCellComponentFactory currentMonthDays={currentMonthDays} />
      {modalOpen ? (
        <>
          {/* modal shadow */}
          <span
            style={{
              backgroundColor: "black",
              position: "absolute",
              opacity: 0.5,
              padding: "100vh",
              left: "0",
              transform: "translateY(-100vh)",
              overflow: "hidden",
            }}
          ></span>
          <span
            // edit cell container style
            style={{
              left: "30%",
              right: "30%",
              position: "absolute",
              transform: "translateY(-30em)",
              backgroundColor: "darkgray",
              overflow: "hidden",
            }}
          >
            <EditCellModal setModalOpen={setModalOpen} cellData={calendarCellObjectsFilled[calendarIndex!]} />
          </span>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Calendar;
