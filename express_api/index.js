const express = require('express');
const path = require('path');
const members = require('./Members')
const logger = require('./middleware/logger')
const app = express();

/* first step

app.get('/',(req,res) => {
   // res.send("<h1>hello world</h1>")
   res.sendFile(path.join(__dirname,'public','index.html'));
});
*/



//init middleware
app.use(logger);
//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));
/*
//Gets all members
app.get('/api/members',(req,res)=>{
    res.json(members)
});

//Get single member
app.get('/api/members/:id',(req,res)=>{
   // res.json(req.params.id)
   const found = members.some(member => member.id === parseInt(req.params.id));
   if(found){
   res.json(members.filter(member => member.id === parseInt(req.params.id)));
}else{
    res.status(400).json({msg: `member not found with ${req.params.id}`})
}
});
*/

app.use('/api/members',require('./routes/api/members'));
//2nd step
app.use(express.static(path.join(__dirname,'public')));

const PORT = process.env.PORT || 5000;

app.listen(PORT,() => console.log(`server started on port : ${PORT}`))