import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import {grey} from '@mui/material/colors'


const Auth = () => {
const [isSignup, setIsSignup] = useState(false);
const [fields, setFields] = useState({
    name:"", email:"", password:"",
});
const handleChange = (e) =>{
    setFields((prevState) =>({
        ...prevState,
        [e.target.name] : e.target.value
    }));
};
const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fields);
}

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Box display="flex" flexDirection={"column"} 
                     maxWidth={380} justifyContent={"center"} 
                     alignItems={"center"} borderRadius={4} 
                     margin="auto" padding={5} marginTop={5} 
                     boxShadow="7px 7px 14px #666666" 
                     >

                    <Typography   sx={{ fontWeight: 700, fontSize: 20, fontFamily: "revert", 
                                  textAlign: "center", padding: 1}}> Please {isSignup ? "Signup" : "Login"} </Typography>
                        
                        {isSignup && <TextField value={fields.name} onChange={handleChange} name="name" margin= "dense" placeholder='Your Name' sx={{width: 260}}></TextField>}
                        <TextField value={fields.email} onChange={handleChange} name="email" margin= "dense" type={'email'} placeholder='Your Email' sx={{width: 260}}></TextField>
                        <TextField value={fields.password} onChange={handleChange} name="password" margin= "dense" type={'password'} placeholder='Your Password' sx={{width: 260}}></TextField>
                        
                        <Button type='submit' sx={{width: 300, color: grey[100], backgroundColor: grey[900], marginTop: 2}} variant='contained'>Submit</Button>
                        <Button onClick={()=> setIsSignup(!isSignup)}  sx={{color: grey[900], marginTop: 1, fontFamily: "monospace"}}> {isSignup ?  "Have Account? Login" : "Don't Have Account? Signup"} </Button>
                    
                </Box>
            </form>
        </div>
    );
};

export default Auth;