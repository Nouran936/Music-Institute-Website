const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const connectDB = require('./utili/config/db');

const app = express();
const bodyParser = require('body-parser');

const courseRouter = require('./routers/courseRouter');
const adminRouter = require('./routers/adminRouter');
const instructorRouter = require('./routers/instructorRouter');
const contactRouter = require('./routers/contactRouter');
const userAuthRouter = require('./routers/userAuth');
const userRouter = require('./routers/userRouter');

app.use(cors({origin: 'http://localhost:4200'}));
app.use(bodyParser.json());

app.use('/courses', courseRouter);
app.use('/admin', adminRouter);
app.use('/instructors',instructorRouter);
app.use('/user', userAuthRouter);
app.use('/user', userRouter)
app.use('/', contactRouter);

app.use(express.json());

connectDB();



const port = 3000;
app.listen(port, ()=>{
  console.log(`Server is running http://localhost:${port}`);
})
