const getPostsData = async () =>{
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  return res.json()
}



const ListOfPosts = async ()=>{

    const posts = await getPostsData()


  return(
    <div>
        {posts.map((post) => <p key={post.id}>{post.title}</p>)}
    </div>

  )
}


export default ListOfPosts