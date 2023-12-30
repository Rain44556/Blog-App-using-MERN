import React from 'react';
import { AppBar, Box } from '@mui/material';
import {styled} from '@mui/material';

const Img = styled('img')({
    
    marginTop: 5,
});

const Body = () => {
    const headerImgUrl = "https://img.freepik.com/free-photo/top-view-watercolor-painting-table_23-2148563640.jpg?w=1060&t=st=1703947412~exp=1703948012~hmac=e0d913d17fbc2bd8dd442d7dbceaf2194078f69ed213c79193252e2c5e965adc";
    return (
       <Box><Img src={headerImgUrl}></Img></Box>
    );
};

export default Body;