# Node.js

## Node.js kya hai?

- Node.js koi programming language nahi hai.
- Node.js koi framework nahi hai.
- Node.js ek JavaScript runtime environment hai.

## JavaScript se backend ban sakta hai?

- Browser ke andar JavaScript se backend nahi ban sakta.
- Lekin jab JavaScript ko Node.js runtime milta hai,
  tab hum server bana sakte hain.

## Important Concept

Jab tak Node.js run karta hai,
tab tak woh ek environment provide karta hai
jisme JavaScript server-side code execute kar sakta hai.

## hum js ka code likenge jo ki wrapper layer of js receive karegi and wo code v8 engine ke c++ modules ke saath ek server create karega 


## npm 
- npm ek jagah jaha pr log code upload krte hh aur ap code waha se lete ho and code upload bhi kr skte ho 

- we can open terminal using ctrl+`


## package json file k km kya hh
-yeh jme bata hh ki hm kya kya use kiye hh 

- first hmne npm init kiya hh jisse hmne package json bnaya hh jo hmme bata h ki hmne project ka kya kya use kiya hh 

## how to use different packageg 
https://nodejs.org/docs/latest/api/fs.html#file-system

## hmm isme callback and sync use krenge 

- const shiv = require('fs');  iske use se apne fs module ko node se bahar nikala hh aur shiv const me move krliya hh 


## what we have to study
- 1-> write file
- 2-> appendfile
- 3-> copyfile
- 4-> rename
- 5-> unlink

- CALLBACK hmmesa ek function hota hh
hmmne writefile likha hh 
fs.writeFile("heyshivam.txt", "hey shivam kaise ho", function(err){
    if(err) console.error(err);
    else console.log("done");
})   heyshivam file ka naam hh phir uska data aur function agar error to err print error ho jayega  wrna done

- appendfile  sirf data ko add krdeta hh -> day2p2 pr ja kr dekho usko terminal me run krne ke liye 
- node  day2\day2p2.js
- node isliye kyonki node runtime enviroment dega day2 folder ka naam aur day2p2.js usme file ka naam 

- rename file change the name of file that you create 
- in day2 we rename the file heyshivam to hellon shivam 
- unlink  file se koi file hata dega agar pura run karega wrna err shoe karega  uska documentation padgo 
- https://nodejs.org/docs/latest/api/fs.html#fsappendfilepath-data-options-callback

fs.unlink("hello.txt"(file ka naam), functyion(err)){
    if(err)  console.error(err);
    else console.log("removerd);
}

