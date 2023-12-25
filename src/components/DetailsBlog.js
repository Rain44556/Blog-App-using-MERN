import { Box, Button, InputLabel, TextField, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


const inputStyles = {fontWeight:'bold', 
                     mt:1, 
                     mb:1, 
                     fontSize:"20px"}

const DetailsBlog = () => {
    const navigate = useNavigate();
    const [blog, setBlog] = useState();
    const id = useParams().id;
    console.log(id);

    const [fields, setFields] = useState({
        headline:"", overview:"",
    });
    const handleChange = (e)=> {
                setFields((prevState) => ({
                    ...prevState,
                    [e.target.name]: e.target.value,
                    }));
        };

    const detailsFetch = async() =>{
        const res = await axios
        .get(`http://localhost:5000/api/blog/${id}`)
        .catch((err)=>console.log(err));
        const data = await res.data;
        return data;
    };

    useEffect(()=>{
        detailsFetch().then((data) =>{ 
            setBlog(data.blog)
            setFields({title: data.blog.headline, 
                       description: data.blog.overview, 
                    })
            });
            }, [id]);

    const requestSend = async () =>{
    const res = await axios.put(`http://localhost:5000/api/blog/update/${id}`,{
        title: fields.headline,
        description: fields.overview,
    }).catch((err) => console.log(err));
    const data = await res.data;
    return data;
    };
        console.log(blog);

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(fields);
        requestSend()
        .then((data) => console.log(data))
        .then(()=> navigate("/myBlogs/"));
    };

    return (
        <div> { fields && (
    <form onSubmit={handleSubmit}>
    <Box
        width={"70%"}
        display={"flex"} 
        flexDirection={"column"} 
        border={5} 
        borderColor={"rgb(0,100,0)"}
        borderRadius={8}  
        padding={5} 
        margin={"auto"}
        marginTop={3}
        boxShadow="9px 9px 18px rgb(0,100,0)" 
        >
        <Typography variant='h4'
                        textAlign={"center"} 
                        fontWeight={"bold"} 
                        padding={2} 
                        color={'rgb(0,100,0)'}
                        fontFamily={"revert-layer"}>Share Your Blog
        </Typography>
        <InputLabel sx={inputStyles}>Headline</InputLabel>
        <TextField margin='auto' variant='outlined' name={"headline"} value={fields.headline} onChange={handleChange}></TextField>
        <InputLabel sx={inputStyles}>An Overview</InputLabel>
        <TextField margin='auto' variant='outlined' name={"overview"} value={fields.overview} onChange={handleChange}></TextField>
        <Button type="submit" variant='contained' sx={{borderRadius: 5, margin: "auto", mt:2, backgroundColor: 'rgb(0,100,0)', width: "60%", color: grey[300], fontSize: 16, fontWeight: 700}}>Submit</Button>
    </Box> 
    </form>
)}
       </div>
    )
};

export default DetailsBlog;