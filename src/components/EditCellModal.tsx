import {Dispatch, FC, SetStateAction} from 'react'
import { calendarCellType } from './Calendar';

export type editCellType = {
  cellData: undefined | calendarCellType,
  setModalOpen: Dispatch<SetStateAction<boolean>>
};

const EditCellModal: FC<editCellType> = ({cellData, setModalOpen}) => {
  return (
    <>
    <span> {cellData?.day} </span>
    <span> {cellData?.month} </span>
    <span> {cellData?.year} </span>
    <span> {cellData?.note.text} </span>
    <span onClick={() => setModalOpen(false)}> [Close]</span>
    </>
  )
}

export default EditCellModal