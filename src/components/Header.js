import React from 'react';
import {AppBar, Toolbar, styled, Typography} from '@mui/material';

const Img = styled('img')({
    width: 80,
   padding: 5, 
});

const Header = () => {
    const imgUrl = "https://img.freepik.com/free-photo/toy-bricks-table_144627-48267.jpg?w=996&t=st=1702643534~exp=1702644134~hmac=2a2e3b23c88fb8b7f3cad85865c88950544b4bfd99a4c5fdfdf1d31794c41525";
    return (
        <AppBar>
            <Toolbar>
                <Img src ={imgUrl} alt = "blog"/>
                <Typography>App</Typography>
            </Toolbar>
            </AppBar>
    );
};

export default Header;