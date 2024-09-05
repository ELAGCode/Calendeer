import React from 'react'
import Calendar from './Calendar';
import Navigation from './Navigation';

type dashboardType = any | 
{
};


const Dashboard: React.FC<dashboardType> = () => {
  return (
    <>
    <Navigation/>
    <Calendar calendarData={[]}/>
    </>
  )
}

export default Dashboard