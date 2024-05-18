import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from './routes/user.route.js';
import authRoute  from './routes/auth.route.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';



dotenv.config();
mongoose.connect(
   process.env.MONGO
)
.then(() =>{
    console.log("MongoDB is connected");

})
.catch((err) => {
    console.log(err);

});
const app = express();
const corsOptions = {
    origin: 'https://stellular-crostata-4bb6be.netlify.app',
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(cookieParser());
app.listen(3000, () =>{
    console.log("Server is running on port 3000!!")
});
app.use('/api/user', userRoute);
app.use('/api/auth', authRoute);


app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal server error!!...';
    res.status(statusCode).json({
        success : false,
        statusCode,
        message
    });
});