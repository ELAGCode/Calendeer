import { Dispatch, FC, SetStateAction, useState } from "react";
import { calendarCellType } from "./Calendar";

export type editCellType = {
  cellData: undefined | calendarCellType;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
};

const EditCellModal: FC<editCellType> = ({ cellData, setModalOpen }) => {

  const [calendarDetailText, setCalendarDetailText] = useState();

  const handleSubmit = (e) => {
    console.log(e.target)
  }

  return (
    <span>
      <div>
        <h3>
          <span
          // 'Close' button style
            style={{
              display: "flex",
              fontSize: "12px",
              flexDirection: "row-reverse",
              paddingRight: "16px"
            }}
            onClick={() => setModalOpen(false)}> [Close]
          </span>
          Edit Day
        </h3>
      </div>
      <hr />

      <div>
        <br />
        <span> {cellData?.month} </span>
        <span> {cellData?.day} </span>
        <span> {cellData?.year} </span>
      </div>
      <br />
      <div>
        <form onSubmit={(e: any) => handleSubmit(e)}>
        <textarea id="dayDetails" placeholder="day details..."></textarea>
        </form>
      </div>
      <span> {cellData?.note?.text} </span>
      <button type="submit" style={{margin: "5px"}} className="btn btn-primary">Submit</button>
    </span>
  );
};

export default EditCellModal;
