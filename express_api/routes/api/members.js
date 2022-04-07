const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();
const members = require('../../Members')
const uuid = require('uuid')

//Gets all members
router.get('/',(req,res)=>{
    res.json(members)
});

//Get single member
router.get('/:id',(req,res)=>{
   // res.json(req.params.id)
   const found = members.some(member => member.id === parseInt(req.params.id));
   if(found){
   res.json(members.filter(member => member.id === parseInt(req.params.id)));
}else{
    res.status(400).json({msg: `member not found with ${req.params.id}`})
}
});

//create member

router.post('/',(req,res)=>{
    //res.send(req.body);
    const newMember = {
id: uuid.v4(),
name:req.body.name,
email:req.body.email,
status:'active'
    }
    if(!newMember.name || !newMember.email){
        res.status(400).json({msg:`please include a name and email`});
    }
    members.push(newMember);
    res.json({members});
})

//update member

router.put('/:id',(req,res)=>{
    // res.json(req.params.id)
    const found = members.some(member => member.id === parseInt(req.params.id));
    if(found){
        const upMember = req.body;
        members.forEach(member => {
            if(member.id === parseInt(req.params.id)){
                member.name = upMember.name ? upMember.name : member.name;
                member.email = upMember.email ? upMember.email : member.email;
                res.json({msg:'Member updated',member});
            }
        })
    res.json(members.filter(member => member.id === parseInt(req.params.id)));
 }else{
     res.status(400).json({msg: `member not found with ${req.params.id}`})
 }
 });

 //delete single member
router.delete('/:id',(req,res)=>{
    // res.json(req.params.id)
    const found = members.some(member => member.id === parseInt(req.params.id));
    if(found){
    res.json({msg:'Member deleted',members:members.filter(member => member.id === parseInt(req.params.id))});
 }else{
     res.status(400).json({msg: `member not found with ${req.params.id}`})
 }
 });

 
module.exports = router;