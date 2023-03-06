import React from 'react'

const ImageComponent = (props: any) => {
    return (
        <div className="">
            <img src={props.url} className="rounded" alt="Authors face" style={{width: "150px"}}/>
        </div>
    )
}

export default ImageComponent