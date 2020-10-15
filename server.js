import express from "express";
import mongoose from "mongoose";


//app config

const app  = express();
const port = process.env.port || 8001;
const connection_url = 'mongodb+srv://admin:admin@cluster0.ijlxr.mongodb.net/<dbname>?retryWrites=true&w=majority';

// middlewares

mongoose.connect(connection_url{

    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
})

// db points



// Api endpoints
app.get("/",(req,res) => res.status(200).send("Hello Developers"));

// listeners

app.listen(port, () => console.log(`listening to localhost: ${port}`));