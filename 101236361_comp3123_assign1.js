const { response } = require('express');
const express = require('express');
const app = express();
const router = express.Router();
var user1 = require("./users.json");


router.get('/user',(req,res)=>{
    let uid = req.query.uid;
    let length=user1.length;
    let error = {
        "message":"No user found"
    }
    if(uid <=length && uid > 0)
    {
        let response = {
                "id":user1[uid-1].id,
                "name":user1[uid-1].name,
                "email":user1[uid-1].email,
                "address":user1[uid-1].address.street +", "+ user1[uid-1].address.city +", "+user1[uid-1].address.zipcode,
                "phone":user1[uid-1].phone
            }
        res.send(response)
    }
    else{
        res.send(error)
    }
    
})
router.get('/users/all',(req,res)=>{
    
    const response = user1.sort((a, b) => a.username.localeCompare(b.username));
    res.send(response);
      
})

app.use('/', router);

app.listen(process.env.port || 8081);

console.log('Web Server is listening at port '+ (process.env.port || 8081));
