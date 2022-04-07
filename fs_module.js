const fs = require('fs');
/*  1st 
fs.readFile('file.txt','utf8',(err,data)=>{
    console.log(err,data);
})  //readFile is non blocking and defer the work

console.log("finished reading file") //it will print first

*/

/* 2nd 

const a = fs.readFileSync("file.txt"); //intentionally block
console.log(a.toString());

console.log("finished reading file")

*/

/* 3rd
fs.writeFile('file1.txt',"This is data",(err,data)=>{
    console.log("written to the file")
    console.log(err,data);
})

console.log("finished reading file")
*/

const a = fs.writeFileSync("file1.txt","new  line added");
console.log(a)