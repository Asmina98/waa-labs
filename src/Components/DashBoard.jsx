import Posts from "./Posts";

import { useState } from "react";
import PostsData from "./Post";

const DashBoard = ()=>{

    const [posts,setPosts]=useState(PostsData);
    const [newTitle,setNewTitle]=useState("");
   console.log(posts);


  const handleClickChangeTitle=()=>{
    setPosts(
        [
            {...posts[0],Title:newTitle},
            ...posts.slice(1)
    ]
    )
  }
  
  const handleTitleChange=(e)=>{
    console.log(e.target.value);
   setNewTitle(e.target.value);
  }

    return(
        <div style={{marginTop:40}}>
         <input type="text" placeholder="write new title" onChange={handleTitleChange} value={newTitle}/><br/>
        <button onClick={handleClickChangeTitle} >Change Name</button>
         <Posts postsData={posts}/>
        </div>
       
    )
}
export default DashBoard;