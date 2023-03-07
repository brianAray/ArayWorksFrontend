import React, { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import BlogComponent from "./BlogComponent";

const initialState = {
  currPage: 1,
  prevPage: 0,
  blogList: [] as any[],
  wasLastList: false,
};
const BlogpageComponent = () => {
  const listInnerRef = useRef(null);

  const [state, setState] = useState(initialState);

  function onScroll() {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;

      if (scrollTop + clientHeight >= scrollHeight - 40) {
        // This will be triggered after hitting the last element
        // API call should be made here while implementing pagination
        setState({ ...state, currPage: state.currPage + 1 });
      }
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://dummyjson.com/posts?limit=10&skip=${state.currPage * 10}`
      );
      if (!response.data.posts.length) {
        setState({ ...state, wasLastList: true });
        return;
      } else {
        setState({
          ...state,
          prevPage: state.currPage,
          blogList: [...state.blogList, ...response.data.posts],
        });
      }
    };
    if (!state.wasLastList && state.prevPage !== state.currPage) {
      fetchData();
    }
  }, [state.currPage, state.wasLastList, state.prevPage, state.blogList]);

  return (
    // <div className='container'>
    <BlogComponent
      className="container"
      onScroll={onScroll}
      listInnerRef={listInnerRef}
      blogList={state.blogList}
    ></BlogComponent>
    // </div>
  );
};

export default BlogpageComponent;
