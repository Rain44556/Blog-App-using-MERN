import express from 'express';
import mongoose from 'mongoose';
import router from './routes/routes.js';
import blogRouter from './routes/BlogRoutes.js';
import cors from 'cors';


const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);


mongoose.connect('mongodb+srv://admin:tagDQmtTSvMVVE9d@cluster0.n4rwzzw.mongodb.net/blog-app?retryWrites=true&w=majority')
.then(() => app.listen(5000))
.then(() => console.log('connected with mongo'))
.catch((err) => console.log(err));