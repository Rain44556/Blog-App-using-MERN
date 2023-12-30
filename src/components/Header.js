import React, { useState } from 'react';
import {AppBar, Toolbar, Box, Button, styled, Typography, Tabs, Tab} from '@mui/material';
import {grey, lightGreen} from '@mui/material/colors'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { actionsAuth } from '../store';

const Img = styled('img')({
    width: 100,
   padding: 5,
   borderRadius: 50,
});


const Header = () => {
    const imgUrl = "https://img.freepik.com/free-vector/green-buttefly-with-bokeh-background_1035-326.jpg?w=740&t=st=1703431298~exp=1703431898~hmac=5adc0b8f16ddaa202c9920794eca1948d9be90c1ae67700de78651a238cbb95a";
    const [value, setValue] = useState();
    const isAccessible = useSelector((state => state.isAccessible)); 
    const dispath = useDispatch();

    return (

        <AppBar position="sticky" sx={{backgroundColor: "black"}}>
        <Toolbar>
                <Img src ={imgUrl} alt = "blog"/>
                <Typography sx={{fontFamily: "fantasy", 
                            color: "greenyellow"}} 
                            variant='h6'>BloG ApP</Typography>

          {isAccessible && <Box display="flex" 
                                marginLeft="auto" 
                                marginRight="auto">
            <Tabs textColor= {"inherit"} 
                  value={value} 
                  onChange={(e,val) => setValue(val)}>
                <Tab LinkComponent={Link} to="/blogs" label = "Each Blogs"></Tab>
                <Tab LinkComponent={Link} to="/myBlogs" label = "My Blogs"></Tab>
                <Tab LinkComponent={Link} to="/blogs/add" label = "Add Blogs"></Tab>
            </Tabs>
           </Box>}

           <Box display="flex" marginLeft="auto">
            {!isAccessible && <> <Button LinkComponent={Link} to="/auth" 
                                         sx={{margin: 1, 
                                            borderRadius: 1, 
                                            backgroundColor: lightGreen[700], 
                                            color: grey[300], 
                                            fontStyle: "italic", 
                                            fontWeight: 900}} 
                                         variant='contained'>
                                         Login</Button>

            <Button LinkComponent={Link} to="/auth" 
                    sx={{margin: 1,  
                        borderRadius: 1, 
                        backgroundColor: lightGreen[700], 
                        color: grey[300], 
                        fontStyle: "italic", 
                        fontWeight: 900}}
                        variant='contained'>
                        Signup</Button></>}

            {isAccessible && (<Button
                LinkComponent={Link} to="/auth" 
                sx={{margin: 1,  
                    borderRadius: 1, 
                    backgroundColor: lightGreen[700], 
                    color: grey[300], 
                    fontStyle: "italic", 
                    fontWeight: 900}}
                    variant='contained' 
                    onClick={()=>dispath(actionsAuth.logout())}>
                Logout</Button>)}
           </Box>

        </Toolbar>
        </AppBar>
     
    );
};

export default Header;