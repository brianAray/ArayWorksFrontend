import React from 'react'
import BodyComponent from './Subcomponents/BodyComponent'
import MainTitleComponent from './Subcomponents/MainTitleComponent'

const HomepageComponent = () => {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <MainTitleComponent title={"Page Title"} />
        </div>
        <div className="col"></div>
      </div>
      <div className='row'>
        <div className='col'></div>
        <div className='col'>
          <BodyComponent />
        </div>
        <div className='col'></div>
      </div>
    </div>
  )
}

export default HomepageComponent