import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [post , setPost] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => setPost(data))
  }, [])

  return(
    <div>
      {post.slice(0.5).map(post => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  )
}
export default App;