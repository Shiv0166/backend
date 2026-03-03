const fs = require('fs');
fs.writeFile("heyshivam.txt", "hey shivam kaise ho", function(err){
    if(err) console.error(err);
    else console.log("done");
})
fs.appendFile("heyshivam.txt", "kb ja rhe ho collage", function(err){
    if(err) console.error(err);
    else console.log("done");
})
fs.rename("heyshivam.txt", "helloshivam.txt",function(err){
    if(err) console.error(err);
    else console.log("done");
})