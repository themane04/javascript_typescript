require('dotenv').config();
const { Pool} = require('pg');
const pg = require('pg');

const fs = require('fs');
var format = require('pg-format');
pg.defaults.poolSize=1
const pool = new Pool({
    user: 'rman',
    host: 'localhost',
    database: 'rproject',
    password: "react",
    port: 5432,
});

pool.query("CREATE TABLE IF NOT EXISTS tweet ( tweetid integer primary key  generated always as identity,title varchar(50),content varchar(300));", (err, res) => {
    console.log(err, res)

});
pool.query("DELETE FROM  book WHERE 1=1", (err,res)=>{


})
pool.query("CREATE TABLE IF NOT EXISTS book ( bookid integer primary key  generated always as identity,title varchar(50), descript varchar(500));", (err, res) => {
    console.log(err, res)

});


let cleanlist=[]
fs.readFile('bookexamples.json', (err, data) => {
    if (err) throw err;
    let books = JSON.parse(data);

    for ( book  of books["books"]){
        cleanlist.push([book["title"],book["description"]])
    }

    pool.query(format('INSERT INTO book (title, descript ) VALUES %L', cleanlist), (err, result)=>{
        console.log(err);
        console.log(result);
    });

    pool.end()

});




