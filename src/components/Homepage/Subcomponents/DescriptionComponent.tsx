import React from 'react'

const DescriptionComponent = (props: any) => {
  return (
    <div style={{width: "500px", maxWidth: "100%"}}>{props.text}</div>
  )
}

export default DescriptionComponent