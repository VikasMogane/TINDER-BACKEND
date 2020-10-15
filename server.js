import express from "express";
import mongoose from "mongoose";
import Cards from "./dbCards.js";
import cors from "cors";

//app config

const app  = express();
const port = process.env.port || 8001;
const connection_url = 'mongodb+srv://admin:admin@cluster0.ijlxr.mongodb.net/<dbname>?retryWrites=true&w=majority';

// middlewares

app.use(express.json());
app.use(cors());

mongoose.connect(connection_url,{

    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
})

// db points
 


// Api endpoints
app.get("/",(req,res) => res.status(200).send("Hello Developers"));

app.post('/tinder/card',(req,res)=>{

    const dbCard = req.body;
    Cards.create(dbCard, (err,data)=> {

        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(201).send(data);
        }

    });
});


app.get('/tinder/card',(req,res)=>{

    Cards.find( (err,data)=> {

        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(200).send(data);
        }

    });

});
// listeners

app.listen(port, () => console.log(`listening to localhost: ${port}`));