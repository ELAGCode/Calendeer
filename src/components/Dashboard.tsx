import React from 'react'
import Calendar from './Calendar';

type dashboardType = any | 
{
    props : string | any
};


const Dashboard: React.FC<dashboardType> = () => {
  return (
    <Calendar/>
  )
}

export default Dashboard