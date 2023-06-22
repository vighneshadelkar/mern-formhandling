const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const userRouter = require('./routes/routes')
const PORT = process.env.PORT || 4000;
const cors = require('cors')
const DATABASE_URL = process.env.DATABASE_URL;
const app = express();
const Imgrouter=require('./routes/uploadImage');

app.use(express.json());
app.use(cors());
app.use('/api/user', userRouter);
app.use('/api/uploads',Imgrouter);
app.use('/',express.static('uploads'))
mongoose.connect(DATABASE_URL, { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', error => console.log(error))

db.once('open', () => {
    console.log("database connected")
})




app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})