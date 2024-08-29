import { Dispatch, FC, SetStateAction } from "react";
import { calendarCellType } from "./Calendar";

export type editCellType = {
  cellData: undefined | calendarCellType;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
};

const EditCellModal: FC<editCellType> = ({ cellData, setModalOpen }) => {
  return (
    <span>
      <div>
        <h3>
          Edit cell {cellData?.day}
          <span
            style={{
              fontSize: "12px",
              position: "absolute",
              marginLeft: "30%",
              marginTop: "5px",
            }}
            onClick={() => setModalOpen(false)}
          >
            Close [X]
          </span>
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
        <textarea placeholder="day details..."></textarea>
      </div>
      <span> {cellData?.note.text} </span>
      <span></span>
    </span>
  );
};

export default EditCellModal;
