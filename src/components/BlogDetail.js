import { Button, InputLabel, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const labelStyles = { mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" }

function BlogDetail() {
  const navigate = useNavigate();
  const [blog, setBlog] = useState()

  const id = useParams().id
  console.log(id);

  const [inputs, setinputs] = useState({
    title: "",
    description: "",
    imageURL: "",
  })

  const handleChange = (e) => {
    setinputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const fetchDetails = async () => {
    const res = await axios.get(`http://localhost:6000/api/blog/${id}`).catch(err => console.log(err))
    const data = await res.data;
    return data;
  }

  useEffect(() => {
    fetchDetails().then(data => {
      setBlog(data.blog)
      setinputs({
        title: data.blog.title,
        description: data.blog.description
      })
    })
  },[id])
  const sendRequest = async ()=>{
    const res = await axios.put(`http://localhost:6000/api/blog/update/${id}`,{
      title: inputs.title,
      description: inputs.description
    }).catch(err=>console.log(err))
    const data = await res.data;
    return data;
  }

  console.log(blog);

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(inputs);
    sendRequest()
    .then(data=>console.log(data))
    .then(()=>navigate("/myBlogs/"))
  }

  return (
    <div>
      { inputs && <form onSubmit={handleSubmit}>
        <Box
          border={3}
          borderColor="linear-gradient(90deg, rgba(17,0,36,1) 0%, rgba(49,108,158,1) 31%, rgba(75,54,170,1) 70%, rgba(2,0,140,1) 100%)"
          borderRadius={10}
          boxShadow="10px 10px 20px #ccc"
          margin={"auto"}
          marginTop={3}
          padding={3}
          display="flex"
          flexDirection={'column'}
          width={"80%"}
        >
          <Typography fontWeight={"bold"} padding={3} color="gray" variant='h2' textAlign={"center"}>Post Your Blog</Typography>

          <InputLabel sx={labelStyles}>Title</InputLabel>
          <TextField name="title" onChange={handleChange} value={inputs.title} margin='auto' variant="outlined" />

          <InputLabel sx={labelStyles}>Description</InputLabel>
          <TextField name="description" onChange={handleChange} value={inputs.description} margin='auto' variant="outlined" />

          <Button
            type='submit'
            sx={{ mt: 2, borderRadius: 4 }}
            variant="contained"
            color='warning'
          >Submit</Button>
        </Box>
      </form>}
    </div>
  )
}

export default BlogDetail