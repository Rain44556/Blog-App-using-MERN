import { Avatar, Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import React from 'react';

const Blog = ({title,description,imgUrl, userName}) => {
    return (
    <div>
    <Card sx={{ width: "50%", boxShadow: "7px 7px 14px grey", padding: 3, margin: "auto", marginTop: 3, ":hover":{
        boxShadow: "12px 12px 20px grey"}, }}>

      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {userName}
          </Avatar>
        }
        
        title={title}
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image={imgUrl}
        alt="Paella dish"
      />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
            {description}       
        </Typography>
      </CardContent>
    </Card>

        </div>
    );
};

export default Blog;