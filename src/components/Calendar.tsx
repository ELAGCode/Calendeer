import { Dispatch, FC, useEffect, useMemo, useState } from "react";
import EditCellModal from "./EditCellModal";
// import { mockData } from "./mockData";
import { CSSProperties } from "react";

export const monthNumberToString = (month: number) => {
  const mapping = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December"
  } as {[key: number]: string}
  return mapping[month]
}

export type calendarType = {
  calendarData: calendarCellType[] | any[];
  setNavigationMonthSelected: Dispatch<React.SetStateAction<number | undefined>>;
  navigationMonthSelected: number | undefined
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

//Align calendar cells by padding cell array with empty cells (for now).
//Objective: find where a month ends ex: monday -> 5 concat object
//Objective: find where a month begins ex: monday -> 1 unshifted object
//Objective Extra: find the total days in the currently selected month and previous, and next
//          for correct wrapping numbers. e.g ([29 or 30 or 31][1][2][...][current month end date][1][2][3])
//ex: [30][31][1][2][3][4][5] <-- one based calendar index wrap from a month with 31 days.
//all cases: 31->1->2... or 30->1->2... or for February 29->1->2... or for February in a leap year etc.
//Motivation: display months in-line with the next one to emulate a more "complete" view of the month
//            as well as a preview of the next month

const calendarCellArrayAlignment = (
  selectedMonth: number | undefined,
  selectedYear: number | undefined
) => {
  //TODO test if 0 or 1 would break this as || treats 0/1 as a literal return for true/false vs returning non-booleans
  // const previousMonthsDayNumber = new Date(selectedYear || year, (selectedMonth || month) - 1 || new Date().getDate(),0).getDate();
  
};

//Main component start
const Calendar: FC<calendarType> = ({ calendarData, setNavigationMonthSelected, navigationMonthSelected }) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [calendarIndex, setCalendarIndex] = useState<number | undefined>();
  const [currentMonthDays, setCurrentMonthDays] = useState<number | undefined>();
  const [cellForm, setCellForm] = useState({});
  const [viewPortWidth, setViewPortWidth] = useState<
    number | null | undefined
  >();

  // create cells of empty objects
  const calendarCellObjects = Array(currentMonthDays).fill({});
  const calendarCellObjectsFilled: calendarCellType[] = calendarCellObjects.map(
    (_cell, idx) => {
      return {
        //0 based index -> calendar based index (1 based)
        id: idx,
        day: idx + 1,
        month: 2,
        year: 2024,
        hasSchedule: false,
        hasNote: true,
        note: { text: `test note text for date ${idx + 1} ${year}` },
        //if schedule is true then schedule will be read and processed
        schedule: { date: "", details: {} },
      };
    }
    
  );
  
    //Offset for calendar shape. i.e month ends on monday -> tues, wednesday,
  //etc must be empty to create the "shape" of the next month
  // [23][24][25][26][27][28][29]
  // [30][31][  ][  ][  ][  ][  ]
  calendarCellArrayAlignment(undefined, undefined);
  calendarCellObjectsFilled.unshift({ id: 21111111 } as any);


  useEffect(() => {
    window.addEventListener("resize", () =>
      setViewPortWidth(window.innerWidth)
    );
  }, []);

  useEffect(() => {
    setCurrentMonthDays(daysInMonth(2024, navigationMonthSelected || month));
    setViewPortWidth(window.innerWidth);
  }, [month, year, cellForm, viewPortWidth, navigationMonthSelected]);

  const handleCalendarCellClick = (_: any, index: number) => {
    setModalOpen(true);
    setCalendarIndex(index);
  };

  return (
    <>
      <span style={CalendarStyles.calendarCellContainerStyle}>
        {calendarCellObjectsFilled.map(
          (cell: calendarCellType | Extract<calendarCellType, "id">, index) => {
            //Offset cell check
            if (!cell["day"]) {
              return (
                <span
                  key={cell.id}
                  style={{
                    ...CalendarStyles.calendarCellStyle,
                    border: "none",
                    ...((viewPortWidth || 0) <= 1024
                      ? { paddingRight: "10px" }
                      : { paddingRight: "70px" }),
                  }}
                ></span>
              );
              //Calendar cell check
            } else if ("day" in cell) {
              return (
                <span
                  key={cell.id}
                  style={{
                    ...CalendarStyles.calendarCellStyle,
                    ...((viewPortWidth || 0) <= 1024
                      ? { paddingRight: "10px" }
                      : { paddingRight: "70px" }),
                  }}
                  onClick={(e) => handleCalendarCellClick(e, index)}
                >
                  {cell?.day}{" "}
                </span>
              );
            } else return <></>;
          }
        )}
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
                  : ({} as calendarCellType)
              }
            />
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
    transition: "padding 0.3s",
  } as CSSProperties,
  calendarCellContainerStyle: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr",
  } as CSSProperties,
};

export default Calendar;
