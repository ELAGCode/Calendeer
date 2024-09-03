import { Dispatch, FC, SetStateAction, useState } from "react";
import { calendarCellType } from "./Calendar";

export type editCellType = {
  cellData: undefined | calendarCellType;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  // TODO
  setCellForm: Dispatch<SetStateAction<any>>;
};

export type editCellSubmission = {
  details: string;
};

export const editCellModalFormMapping = {
  titleModalCellText: "titleCellText",
  dayDetailsModalCellText: "dayDetailsCellText",
};

const EditCellModal: FC<editCellType> = ({
  cellData,
  setModalOpen,
  setCellForm,
}) => {

  const handleSubmit = (e: any) => {
    e.preventDefault();

    let data: { [key: PropertyKey]: PropertyKey | Object } = {};
    const form = e.target.form;

    for (let i = 0; i < form.length; i++) {
      if (form[i].id) data[form[i].id] = form[i].value;
    }
    setModalOpen(false);
    // TODO
    setCellForm({ ...data });
  };

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
              paddingRight: "16px",
            }}
            onClick={() => setModalOpen(false)}
          >
            [Close]
          </span>
          Edit Day {cellData?.day}
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
        <form id="editCellModal">
          <div>{cellData?.note?.text}</div>
          <br />
          <div>
            <input
              form="editCellModal"
              id={editCellModalFormMapping.titleModalCellText}
              placeholder="Optional title"
            />
          </div>
          <div>
            <textarea
              form="editCellModal"
              style={{
                overflow: "hidden",
                padding: "5px",
                margin: "5px",
                borderRadius: "5px",
              }}
              wrap="off"
              defaultValue={""}
              id={editCellModalFormMapping.dayDetailsModalCellText}
              placeholder={" Day details..."}
            />
          </div>
          <button
            onClick={(e) => handleSubmit(e)}
            type="submit"
            style={{ margin: "15px" }}
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </div>
    </span>
  );
};

export default EditCellModal;
