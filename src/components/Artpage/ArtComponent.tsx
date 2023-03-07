import React from 'react'
import ImageComponent from '../Homepage/Subcomponents/ImageComponent'

const ArtComponent = (props: any) => {
  return (
    <div className='col' style={{display: "flex"}}>
      <img src={props.thumbnail} style={{width: "100%", height: "auto", padding: "10px", verticalAlign: "middle"}}/>
    </div>
  )
}

export default ArtComponent