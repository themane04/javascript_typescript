const fs = require('fs');


fs.readFile('bookexamples.json', (err, data) => {
    if (err) throw err;
    let books = JSON.parse(data);
    let cleanlist=[]
    for ( book of books["books"]){
        cleanlist.push({"title":book["title"],"desc":book["description"]})

    }
    console.log(cleanlist)


});