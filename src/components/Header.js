import React from 'react'
import { useState } from 'react'
import { AppBar, Button, Tab, Tabs, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from '../store'
import { Box } from '@mui/system'

function Header() {
    const dispath = useDispatch();
    const isLoggedIn = useSelector((state) => state.isLoggedIn);

    const [tabValue, setTabValue] = useState()
    return (
        <AppBar position='sticky' sx={{ background: "background: rgb(0,0,0); background: linear-gradient(to bottom, #33ccff 0%, #ff99cc 100%);" }}>
            <Toolbar>
                <Typography variant='h4'>BlogApp</Typography>
                {isLoggedIn && <Box display="flex" marginLeft="auto" marginRight="auto">
                    <Tabs textColor='inherit' value={tabValue} onChange={(e, val) => setTabValue(val)}>
                        <Tab LinkComponent={Link} to="/blogs" label="All Blogs" />
                        <Tab LinkComponent={Link} to="/myBlogs" label="My Blogs" />
                        <Tab LinkComponent={Link} to="/blog/add" label="Add Blog" />
                    </Tabs>
                </Box>}
                <Box display="flex" marginLeft="auto">
                    { !isLoggedIn && <> <Button LinkComponent={Link} to="/auth" variant='contained' sx={{ margin: 1, borderRadius: 8 }} color='primary'>Login</Button>
                    <Button LinkComponent={Link} to="/auth" variant='contained' sx={{ margin: 1, borderRadius: 8 }} color='primary'>Sinup</Button> </>}
                    {isLoggedIn && <Button onClick={()=>dispath(authActions.loguot())} variant='contained' sx={{ margin: 1, borderRadius: 8 }} color='primary'>Logout</Button>}
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header;