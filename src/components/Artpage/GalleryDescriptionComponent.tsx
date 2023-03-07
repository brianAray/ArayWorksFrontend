import React from 'react'

const GalleryDescriptionComponent = (props: any) => {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  )
}

export default GalleryDescriptionComponent