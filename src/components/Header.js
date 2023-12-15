import React from 'react';
import {AppBar, Toolbar, Box, Button, styled, Typography} from '@mui/material';
import {brown} from '@mui/material/colors'

const Img = styled('img')({
    width: 100,
   padding: 5,
   borderRadius: 29, 
});


const Header = () => {
    const imgUrl = "https://img.freepik.com/free-photo/toy-bricks-table_144627-48267.jpg?w=996&t=st=1702643534~exp=1702644134~hmac=2a2e3b23c88fb8b7f3cad85865c88950544b4bfd99a4c5fdfdf1d31794c41525";
    return (
        <AppBar sx={{backgroundColor: "rgb(238,209,174)"}}>
            <Toolbar>
                <Img src ={imgUrl} alt = "blog"/>
                <Typography variant='h6'>ApP</Typography>
           <Box display="flex" marginLeft="auto">
            <Button  sx={{margin: 2, borderRadius: 1, backgroundColor: brown[400]}} variant='contained' >Login</Button>
            <Button sx={{margin: 2,  borderRadius: 1, backgroundColor: brown[400]}} variant='contained'>Signup</Button>
           </Box>
            </Toolbar>
            </AppBar>
    );
};

export default Header;