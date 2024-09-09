import React from 'react'
import { monthNumberToString } from './Calendar';

type navigationType = any | 
{
    props : string | any
};

const Navigation: React.FC<navigationType> = ({ navigationMonthSelected, setNavigationMonthSelected }) => {
  return (
    <>
    <div>Current Month: {navigationMonthSelected ? monthNumberToString(navigationMonthSelected) : "N/A"}</div>
    <input type='number' max={12} min={1} onChange={(e: any) => setNavigationMonthSelected(e.target.value)}></input>
    </>
  )
}

export default Navigation