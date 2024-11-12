
const Posts=({postsData})=>{
   
    return (
        <div style={{display:"block"}}>
            {postsData.map(post=>
                (
                    <p style={{height:200, width:200, backgroundColor:"#006bb3",color:"white", marginLeft:300, justifyContent:"space-between",alignContent:"center"}} key ={post.Id}>
                        <p>Id: {post.Id}</p>
                        <p>Title: {post.Title}</p>
                        <p>Author: {post.Author}</p>
                    </p>
                )
            )}
        </div>
    )
}
export default Posts;