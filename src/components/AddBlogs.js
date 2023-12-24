import React, { useState } from 'react';
import { Box,Typography,InputLabel,TextField, Button } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const inputStyles = {fontWeight:'bold', 
                     mt:1, 
                     mb:1, 
                     fontSize:"20px"}

const AddBlogs = () => {
    const navigate = useNavigate();
    const [fields, setFields] = useState({
        headline:"", overview:"", photoURL:"",
    });
    const handleChange = (e)=> {
            setFields((prevState) => ({
                ...prevState,
                [e.target.name]: e.target.value,
                }));
    }

    const requestSend = async()=> {
    const res = await axios.post("http://localhost:5000/api/blog/add",
    {   title: fields.headline,
        description: fields.overview,
        image: fields.photoURL,
        user: localStorage.getItem("userId")
    }).catch(err=> console.log(err));
    const data = await res.data;
    return data;
    };

    const handleSubmit = (e)=>{
            e.preventDefault();
            console.log(fields);
            requestSend()
            .then(data=> console.log(data))
            .then(()=> navigate("/blogs"));
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Box
                width={"70%"}
                display={"flex"} 
                flexDirection={"column"} 
                border={5} 
                borderColor={"rgb(123, 63, 0)"}
                borderRadius={8}  
                padding={5} 
                margin={"auto"}
                marginTop={3}
                boxShadow="9px 9px 18px rgb(123, 63, 0)" 
                >
                    <Typography variant='h4'
                                textAlign={"center"} 
                                fontWeight={"bold"} 
                                padding={2} 
                                color={'rgb(123, 63, 0)'}>Share Your Blog
                    </Typography>
                    <InputLabel sx={inputStyles}>Headline</InputLabel>
                    <TextField margin='auto' variant='outlined' name={"headline"} value={fields.headline} onChange={handleChange}></TextField>
                    <InputLabel sx={inputStyles}>An Overview</InputLabel>
                    <TextField margin='auto' variant='outlined' name={"overview"} value={fields.overview} onChange={handleChange}></TextField>
                    <InputLabel sx={inputStyles}>PictureUrl</InputLabel>
                    <TextField margin='auto' variant='outlined' name={"photoURL"} value={fields.photoURL} onChange={handleChange}></TextField>
                <Button type="submit" variant='contained' sx={{borderRadius: 5, margin: "auto", mt:2, backgroundColor: 'rgb(123, 63, 0)', width: "60%"}}>Submit</Button>
                </Box>
            </form>

        </div>
    );
};

export default AddBlogs;