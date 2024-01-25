const express = require('express');
const app = express();
const httpServer = require("http").createServer(app);
const options = { /* ... */};
var cors = require('cors');


require('dotenv').config();
const { Pool} = require('pg');
const pool = new Pool({
    user: 'rman',
    host: 'localhost',
    database: 'rproject',
    password: "react",
    port: 5432,
});
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => { //Line 9
    res.send("API is working properly"); //Line 10
});

app.get('/api/tweets',(req,res)=>{

});
app.post('/api/newtwet',(req,res)=>{

})

app.get('/api/books',(req,res)=>{
    pool.query('SELECT * FROM book ',(error,results)=>{
        res.json({"books":results.rows});
        res.status(200);
    })
});
app.post('/api/newbook',(req,res)=>{
    console.log(req.body.title)
 pool.query('INSERT INTO book(title,descript) VALUES ($1,$2)',[req.body.title, req.body.descript],(error,results)=>{console.log(results)
     if (error) {
         return res.status(400).send({
             message: "Failed to add book."
         });
     }
     else {
         return res.status(201).send({
             message: "Book added successfully."
         });
     }
 })
})

httpServer.listen(8877);