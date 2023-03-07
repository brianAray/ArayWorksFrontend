import React, { useEffect, useState } from "react";
import GalleryComponent from "./GalleryComponent";
import GalleryDescriptionComponent from "./GalleryDescriptionComponent";

const ArtpageComponent = () => {

  return (
    <div className="container-fluid text-center">
      <div className="row align-items-center">
        <div className="col-sm-auto" style={{width: "10%", padding: "10px"}}>
          <GalleryDescriptionComponent title="Pencil" description="Pencil drawings"/>
        </div>
        <div className="col" style={{width: "80%"}}>
          <GalleryComponent/>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-sm-auto" style={{width: "10%", padding: "10px"}}>
          <GalleryDescriptionComponent title="Pen" description="Pen drawings" />
        </div>
        <div className="col" style={{width: "80%"}}>
          <GalleryComponent/>
        </div>
      </div>
    </div>
  );
};

export default ArtpageComponent;
