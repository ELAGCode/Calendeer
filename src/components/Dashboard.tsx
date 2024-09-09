import React, { useState } from 'react'
import Calendar from './Calendar';
import Navigation from './Navigation';

type dashboardType = any | 
{
};


const Dashboard: React.FC<dashboardType> = () => {

  const [navigationMonthSelected, setNavigationMonthSelected] = useState<number | undefined>();

  return (
    <>
    <Navigation setNavigationMonthSelected={setNavigationMonthSelected} navigationMonthSelected={navigationMonthSelected}/>
    <Calendar setNavigationMonthSelected={setNavigationMonthSelected} navigationMonthSelected={navigationMonthSelected} calendarData={[]}/>
    </>
  )
}

export default Dashboard