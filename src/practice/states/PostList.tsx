import { useQuery } from "@tanstack/react-query";
import axios from "axios"
import usePost from "../hooks/usePost";
import React , { useState } from "react";
import TodoForm from "../components/TodoForm";



export default function PostList() {
    const pageSize = 10;
    // const [page,setPage] = useState(1);
    const {data,error,isLoading,isFetchingNextPage,fetchNextPage} = usePost({pageSize});

    if(isLoading) return <p>Loading....</p>
    if(error) return <p>{error.message}</p>
    return (
        <>
        <TodoForm/>
        {data?.pages.map((pages,index) => <React.Fragment key={index}>
            {pages?.map((post) => {
                return (
                    <div className="row">
                        <ul className="list-group" key={post.id}>
                            <li className="list-group-item text-dark">{post.title}</li>
                        </ul>
                    </div>
    
                )
            })}
        </React.Fragment>)}
        <button className="btn btn-primary" disabled={isFetchingNextPage} onClick={() => fetchNextPage()}>
            {isFetchingNextPage ? 'Loading..': 'Load More'}
        </button>
{/* 
        <button disabled={page == 1} className="btn btn-primary" onClick={() => setPage(page - 1)}>Previous</button>
        <button className="btn btn-primary" onClick={() => setPage(page + 1)}>Next</button> */}

        </>
        
  )
}
