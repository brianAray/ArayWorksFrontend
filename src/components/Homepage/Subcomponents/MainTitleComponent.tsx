import React from 'react'

interface PropsInterface{
    title: string;
}

const MainTitleComponent = (props: PropsInterface) => {
  return (
    <div><p className='fs-1'>{props.title}</p></div>
  )
}

export default MainTitleComponent