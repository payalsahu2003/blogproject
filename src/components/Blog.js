import React, { useEffect, useState } from 'react'
import axios from 'axios'
import BlogCart from './BlogShow';

function Blog() {

  const [blogs, setBlogs] = useState();

  const sendRequest = async () => {
    const res = await axios.get("http://localhost:6000/api/blog").catch(err => console.log(err));
    const data = await res.data;
    return data;
  }
  useEffect(() => {
    sendRequest().then(data => setBlogs(data.blogs))
  }, [])
  console.log(blogs);
  return (
    <div>
      {blogs && blogs.map((blog, index) => (
        <BlogCart
          id={blog._id}
          isUser={localStorage.getItem("userId") === blog.user._id}
          title={blog.title}
          description={blog.description}
          imageURL={blog.image}
          userName={blog.user.name}
        />
      ))}
    </div>
  )
}

export default Blog