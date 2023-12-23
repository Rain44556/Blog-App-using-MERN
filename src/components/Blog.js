import React from 'react';
import {useNavigate} from 'react-router-dom';
import { Avatar, Box, Card, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import ClearIcon from '@mui/icons-material/Clear';


const Blog = ({title,description,imgUrl, userName, isUser, id}) => {
  const navigate = useNavigate();
  const handleIcon= (e)=>{
    navigate(`/myBlogs/${id}`)
  }
  console.log(title,isUser);  
  
  return (
    <div>
    <Card sx={{ width: "50%", boxShadow: "7px 7px 14px grey", padding: 3, margin: "auto", marginTop: 3, ":hover":{
        boxShadow: "12px 12px 20px grey"}, }}>
      
      {isUser && (
        <Box display="flex">
          <IconButton onClick={handleIcon} sx={{marginLeft: "auto"}}><ClearIcon></ClearIcon></IconButton>
          <IconButton onClick={handleIcon}><ModeEditIcon></ModeEditIcon></IconButton>
        </Box>
      )}
      <CardHeader
        avatar={ 
          <Avatar sx={{ bgcolor: red[500] }} aria-label="blog">
            {userName ? userName.charAt(0) : ""}
          </Avatar>
        }
        
        title={title}
        subheader="September 14, 2023"
      />
      <CardMedia
        component="img"
        height="194"
        image={imgUrl}
        alt="Paella dish"
      />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <b>{userName}</b> {":"} {description}       
        </Typography>
      </CardContent>
    </Card>

        </div>
    );
};

export default Blog;