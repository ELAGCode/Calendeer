import React from 'react'
import Calendar from './Calendar';

type dashboardType = any | 
{
};


const Dashboard: React.FC<dashboardType> = () => {
  return (
    <Calendar calendarData={[]}/>
  )
}

export default Dashboard