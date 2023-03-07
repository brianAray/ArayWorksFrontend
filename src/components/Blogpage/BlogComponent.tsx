import React from 'react'

const BlogComponent = (props: any) => {
    return (
        <div className='row gy-5'>
            <div
                onScroll={props.onScroll}
                ref={props.listInnerRef}
                style={
                    {
                        margin: "auto",
                        // width: "60%",
                        padding: "20%",
                        overflowY: "auto",
                        height: "100vh"
                    }
                }
            >
                {props.blogList.map((item: any) => {
                    return (
                        <div key={item.id} className='col'>
                            <div className='p-3'></div>
                            <div className='card'>
                                <div className='card-body'>
                                    <h5 className='card-title'>{item.title}</h5>
                                    <p className='card-text'>{item.body}</p>
                                    <h6><span className='badge bg-secondary'>Author: {item.userId}</span></h6>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default BlogComponent