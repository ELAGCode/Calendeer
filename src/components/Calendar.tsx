import { FC, useEffect, useState } from "react";
import EditCellModal from "./EditCellModal";
// import { mockData } from "./mockData";
import { CSSProperties } from "react";

export type calendarType = {
  calendarData: calendarCellType[] | any[];
};

export type calendarCellType = {
  id: number;
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
  const [cellForm, setCellForm] = useState({});
  const [viewPortWidth, setViewPortWidth] = useState<number | null>();

  // create cells of empty objects
  const calendarCellObjects = Array(currentMonthDays).fill({});
  const calendarCellObjectsFilled: calendarCellType[] = calendarCellObjects.map(
    (_cell, idx) => {
      return {
        //0 based index -> calendar based index (1 based)
        id: idx,
        day: idx + 1,
        month: 9,
        year: 2024,
        hasSchedule: false,
        hasNote: true,
        note: { text: `test note text for date ${idx + 1} ${year}` },
        //if schedule is true then schedule will be read and processed
        schedule: { date: "", details: {} },
      };
    }
  );

  useEffect(() => {
    window.addEventListener('resize', () => setViewPortWidth(window.innerWidth));
  }, [])
 
  useEffect(() => {
    setCurrentMonthDays(daysInMonth(year, month) - 1);
    setViewPortWidth(window.innerWidth)
  }, [month, year, cellForm, viewPortWidth]);

  const handleCalendarCellClick = (_: any, index: number) => {
    setModalOpen(true);
    setCalendarIndex(index);
  };

  return (
    <>
      <span style={CalendarStyles.calendarCellContainerStyle}>
        {calendarCellObjectsFilled.map((cell: calendarCellType, index) => {
          //Calendar cells filled
          return (
            <span
              key={cell.id}
              style={{
                ...CalendarStyles.calendarCellStyle,
                ...((viewPortWidth || 0) <= 1024 ? 
                { paddingRight: "10px" } : { paddingRight: "70px"})}}
              onClick={(e) => handleCalendarCellClick(e, index)}> 
            {cell?.day} </span>
          );
        })}
      </span>
      {/* EDIT MODAL */}
      {modalOpen ? (
        <>
          <div style={CalendarStyles.editModalShadow}></div>
          {/* edit cell container style */}
          <span style={CalendarStyles.editModalStyle}>
            <EditCellModal
              setModalOpen={setModalOpen}
              setCellForm={setCellForm}
              cellData={
                typeof calendarIndex === "number"
                  ? calendarCellObjectsFilled[calendarIndex]
                  : ({} as calendarCellType)}/>
          </span>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

//experimental way of organizing styles
export const CalendarStyles = {
  editModalStyle: {
    left: "10%",
    right: "10%",
    top: "30%",
    position: "absolute",
    background: "darkgray",
    borderRadius: "10px ",
  } as CSSProperties,
  editModalShadow: {
    left: 0,
    top: 0,
    position: "fixed",
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.7)",
  } as CSSProperties,
  calendarCellStyle: {
    border: "1px solid gray",
    padding: "10px",
    paddingRight: "10px",
    paddingBottom: "70px",
    transition: 'padding 0.3s'
  } as CSSProperties,
  calendarCellContainerStyle: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr",
  } as CSSProperties,
};

export default Calendar;
