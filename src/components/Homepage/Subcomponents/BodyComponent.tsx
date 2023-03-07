import React from 'react'
import DescriptionComponent from './DescriptionComponent'
import ImageComponent from './ImageComponent'

const BodyComponent = () => {
    return (
        <div className="container text-center">
            <div className="row">
                <div className="col">
                    <ImageComponent url={"https://www.shutterstock.com/image-photo/close-portrait-smiling-handsome-man-260nw-1011569245.jpg"}/>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <DescriptionComponent text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut egestas tortor metus, vel faucibus massa vulputate in. Proin mollis augue augue, ac sollicitudin neque pharetra vitae. Mauris vel cursus eros. Maecenas bibendum facilisis quam viverra accumsan. Aenean et arcu non lacus malesuada feugiat quis et neque. Donec pretium sem sed sapien consequat, et tempus erat faucibus. Maecenas cursus viverra dolor, id pharetra nulla semper nec. Aenean eget pulvinar felis, id tempor lectus. Phasellus consectetur pretium interdum. Cras venenatis tellus mi, id tincidunt odio consequat et. Suspendisse vestibulum nunc sit amet est tincidunt eleifend. Nam pellentesque vulputate sodales. Mauris in aliquet augue. "}/>
                </div>
            </div>
        </div>
    )
}

export default BodyComponent