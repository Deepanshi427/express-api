const express = require ("express");
const app = express();

app.use(express.json());

app.get("/", (req, res)=>{
    res.json({message: "API is running."});
});

app.get("/user" , (req, res) =>{
    res.json({name : "Deep", role: "Intern"});
});

app.post("/contact", (req, res) =>{
    const {name , email} = req.body;

    if(!name || !email){
        return res.status(400).json({error: "Name & email are required"});   
    }
   return res.status(201).json({ message: "Data received successfully" });
});


app.listen(3000, ()=>{
    console.log("Server running on port 3000");
});
