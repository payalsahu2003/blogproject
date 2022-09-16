import Header from "./components/Header";
import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom"

import Auth from "./components/Auth";
import Blog from "./components/Blog"
import UserBlog from "./components/UserBlog";
import BlogDetail from "./components/UserBlog";
import AddBlog from "./components/AddBlog";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./store";

function App() {
  const dispath = useDispatch();

  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn)

  useEffect(()=>{
    if (localStorage.getItem("userId")) {
      dispath(authActions.login())
    }
  },[dispath])

  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          {!isLoggedIn ? <Route path="/auth" element={<Auth />} /> :
            <>
              <Route path="/blogs" element={<Blog />} />
              <Route path="/blog/add" element={<AddBlog />} />
              <Route path="/myBlogs" element={<UserBlog />} />
              <Route path="/myBlogs/:id" element={<BlogDetail />} /> </>}
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
