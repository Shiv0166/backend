const fs = require('fs');
fs.writeFile("hey.txt", "hey shivam kaise ho", function(err){
    if(err) console.error(err);
    else console.log("done");
})
fs.appendFile("hey.txt", "kb ja rhe ho collage", function(err){
    if(err) console.error(err);
    else console.log("done");
})