import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import ArtComponent from "./ArtComponent";

const initialState = {
  currPage: 1,
  prevPage: 0,
  productList: [] as any[],
  wasLastList: false,
};
const GalleryComponent = (props: any) => {
  const [state, setState] = useState(initialState);

  function nextPageHandler() {
    console.log("next page");
    if (!state.wasLastList) {
      setState({
        ...state,
        prevPage: state.currPage,
        currPage: state.currPage + 1,
      });
    }
  }

  function prevPageHandler() {
    console.log("Prev page");
    if (state.prevPage > 0) {
      setState({
        ...state,
        prevPage: state.currPage,
        currPage: state.currPage - 1,
      });
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://dummyjson.com/products?limit=1&skip=${state.currPage * 1}`
      );
      if (!response.data.products.length) {
        setState({ ...state, wasLastList: true });
        return;
      } else {
        setState({
          ...state,
          prevPage: state.currPage,
          productList: [...response.data.products],
        });
      }
    };
    if (!state.wasLastList && state.prevPage !== state.currPage) {
      fetchData();
    }
  }, [state.currPage, state.wasLastList, state.prevPage, state.productList]);
  return (
    <div className="container" style={{border: "2px black solid", width: "100%"}}>
        <div className="row align-items-center">
            <div className="col">
                <button onClick={prevPageHandler}>Previous Page</button>
            </div>
            {state.productList.map((item: any) => {
                return <ArtComponent className="col" {...item} key={item.id}/>;
            })}
            <div className="col">
                <button onClick={nextPageHandler}>Next Page</button>
            </div>
        </div>
    </div>
  );
};

export default GalleryComponent;
