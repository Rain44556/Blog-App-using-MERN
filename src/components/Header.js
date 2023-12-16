import React, { useState } from 'react';
import {AppBar, Toolbar, Box, Button, styled, Typography, Tabs, Tab} from '@mui/material';
import {brown} from '@mui/material/colors'
import { Link } from 'react-router-dom';

const Img = styled('img')({
    width: 100,
   padding: 5,
   borderRadius: 29, 
});


const Header = () => {
    const imgUrl = "https://img.freepik.com/free-photo/toy-bricks-table_144627-48267.jpg?w=996&t=st=1702643534~exp=1702644134~hmac=2a2e3b23c88fb8b7f3cad85865c88950544b4bfd99a4c5fdfdf1d31794c41525";
    const [value, setValue] = useState();
    return (

        <AppBar position="sticky" sx={{backgroundColor: "black"}}>
        <Toolbar>
                <Img src ={imgUrl} alt = "blog"/>
                <Typography variant='h6'>ApP</Typography>

           <Box display="flex" marginLeft="auto" marginRight="auto">
            <Tabs textColor= {"inherit"} value={value} onChange={(e,val) => setValue(val)}>
                <Tab LinkComponent={Link} to="/blogs" label = "Each Blogs"></Tab>
                <Tab LinkComponent={Link} to="/myBlogs" label = "My Blog"></Tab>
            </Tabs>
           </Box>

           <Box display="flex" marginLeft="auto">
            <Button LinkComponent={Link} to="/auth" sx={{margin: 1, borderRadius: 1, backgroundColor: brown[300]}} variant='contained' >Login</Button>
            <Button LinkComponent={Link} to="/auth" sx={{margin: 1,  borderRadius: 1, backgroundColor: brown[400]}} variant='contained'>Signup</Button>
            <Button LinkComponent={Link} to="/auth" sx={{margin: 1,  borderRadius: 1, backgroundColor: brown[300]}} variant='contained'>Logout</Button>
           </Box>

        </Toolbar>
        </AppBar>
    );
};

export default Header;