import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import authRoutes from './routes/authRoutes.js'
import connectDB from "./config/db.js"
import cors from 'cors'

// configure env
// dotenv.config({ path : '/'});            if the env file is stored in some other file/ folder location
dotenv.config();

// database config
connectDB();

// rest object
const app = express();

// middleware
app.use(cors)
app.use(express.json())
app.use(morgan('dev'));

//routes
app.use('/api/v1/auth/', authRoutes);

//creating rest api
app.get('/', (req, res) => {
    res.send(
    // {
    //     message: "Welcome to Ecommerce Application"
    // }
    "<h1>Welcome to ECommerce Application</h1>"
    );
});

// PORT
const PORT = process.env.PORT || 8080;

// App run : listen
app.listen(PORT, () => {
    console.log(`Server running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white);    
})