import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import {grey} from '@mui/material/colors'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { actionsAuth } from '../store';
import { useNavigate } from 'react-router-dom';


const Auth = () => {
const dispath = useDispatch();
const navigate = useNavigate();
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
const requestSend = async (type = "login") =>{
    const res = await axios.post(`http://localhost:5000/api/user/${type}`,{
    name: fields.name,    
    email: fields.email,
    password: fields.password
    }).catch(err => console.log(err));

    const data = await res.data;
    console.log(data);
    return data;
};
const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fields);
    if(isSignup){
        requestSend("signup")
        .then((data)=>localStorage.setItem("userId", data.user._id))
        .then(()=>dispath(actionsAuth.login()))
        .then(()=> navigate("/blogs"));
    } else{
        requestSend()
        .then((data)=>localStorage.setItem("userId", data.user._id))
        .then(()=>dispath(actionsAuth.login()))
        .then(()=> navigate("/blogs"));
    }
};


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