import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Blog from './Blog';



const UserBlogs = () => {
    const [blogs, setBlogs] = useState();
    const id = localStorage.getItem("userId");
    const requestSend = async () => {
       const res = await axios.get(`http://localhost:5000/api/blog/user/${id}`).catch((err)=> console.log(err));
        const data = await res.data;
        return data;
    };
        useEffect(()=> {
        requestSend().then((data)=> setBlogs(data.blogs));
        }, []);
        console.log(blogs);


    return (
        <div>
           
           {blogs && blogs.map(( blog, index)=>(
                <Blog
                title={blog.title}
                description={blog.description}
                imgUrl={blog.imgUrl} 
                userName={blog.user.name}>
                </Blog>
            ))}

        </div>
    );
};

export default UserBlogs;