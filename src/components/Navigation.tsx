import React from 'react'

type navigationType = any | 
{
    props : string | any
};

const Navigation: React.FC<navigationType> = () => {
  return (
    <div>Navigation</div>
  )
}

export default Navigation