import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Blog from './Blog';



const UserBlogs = () => {
    const [user, setUser] = useState();
    const id = localStorage.getItem("userId");
    const requestSend = async () => {
       const res = await axios.get(`http://localhost:5000/api/blog/user/${id}`).catch((err)=> console.log(err));
        const data = await res.data;
        return data;
    };
        useEffect(()=> {
        requestSend().then((data)=> setUser(data.user));
        }, []);
        console.log(user);


    return (
        <div>
           {" "}
           {user && user.blogs && user.blogs.map(( blog, index)=>(
                <Blog
                id={blog._id}
                key={index}
                isUser={true}
                title={blog.title}
                description={blog.description}
                imgUrl={blog.image} 
                userName={user.name}>
                </Blog>
            ))}

        </div>
    );
};

export default UserBlogs;