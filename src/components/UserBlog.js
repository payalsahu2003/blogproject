import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BlogCart from './BlogShow';

const UserBlog = async () => {
  const [user, setUser] = useState()
  const uid = localStorage.getItem("userId");

  const sendRequest = async () => {
    const res = await axios.get(`http://localhost:6000/api/blog/user/${uid}`).catch(err => console.log(err))
    const data = await res.data;
    return data;
  }
  useEffect(() => {
    sendRequest().then((data) => setUser(data.user))
  })
  console.log(user);

  return (
    <div>
      {user && user.blogs && user.blogs.map((blog, index) => (
        <BlogCart
          id={blog._id}
          key={index}
          isUser={true}
          title={blog.title}
          description={blog.description}
          imageURL={blog.image}
          userName={user.name}
        />
      ))}
    </div>
  )
}

export default UserBlog;