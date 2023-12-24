import React from 'react';
import {useNavigate} from 'react-router-dom';
import { Avatar, Box, Card, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material';
import { green, red, yellow } from '@mui/material/colors';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import ClearIcon from '@mui/icons-material/Clear';
import axios from 'axios';


const Blog = ({title,description,imgUrl, userName, isUser, id}) => {
  const navigate = useNavigate();
  const handleEdit= ()=>{
    navigate(`/myBlogs/${id}`);
  };
  console.log(title,isUser);  

  const requestClear = async() => {
  const res = await axios.delete(`http://localhost:5000/api/blog/${id}`).catch((err) => console.log(err));
  const data = await res.data;
  return data;
  };
  const handleClear = () =>{
  requestClear().then(() => navigate("/")).then(() => navigate("/blogs"));
  };
  
  return (
    <div>
      {" "}
    <Card sx={{ width: "50%", boxShadow: "7px 7px 14px grey", padding: 3, margin: "auto", marginTop: 3, ":hover":{
        boxShadow: "12px 12px 20px grey"}, }}>
      
      {isUser && (
        <Box display="flex">
          <IconButton onClick={handleClear} sx={{marginLeft: "auto", color: green[700]}}><ClearIcon></ClearIcon></IconButton>
          <IconButton onClick={handleEdit} sx={{color: green[700]}}><ModeEditIcon></ModeEditIcon></IconButton>
        </Box>
      )}
      <CardHeader
        avatar={ 
          <Avatar sx={{ bgcolor: yellow[800] }} aria-label="blog">
            {userName ? userName.charAt(0) : ""}
          </Avatar>}
        title={title}
        subheader="September 14, 2023"
      />
      <CardMedia
        component="img"
        height="194"
        image={imgUrl}
        alt="blog"
      />

      <CardContent>
      <hr />
      <br />
        <Typography variant="body2" color="text.secondary">
          <b>{userName}</b> {": "} {description}       
        </Typography>
      </CardContent>
    </Card>

        </div>
    );
};

export default Blog;