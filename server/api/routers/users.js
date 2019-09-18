const express = require("express");
const mongoose = require('mongoose');
const router = express.Router();
const User = require("../models/user");
import userController from  './../controllers/userController';



const bcrypt = require('bcrypt');
const saltRounds = 10;
const secret = 'iewjrU*&sds|\\?wijwdie93';



router.get('/:id', 
    
})

router.get('/getbyemail/:email', (req, res, next)=>{
    const email = req.params.email;
    User.find({email:email}).exec().then(doc=>{
        if(doc){
            res.status(200).json( doc)
        }
        else{
            res.status(404).json({
                message:"No valid entru found for id "+id+ " ! "
             })
        }
        
    }).catch(err=>{
        res.status(500).json({
            err
        })
    });
    
})
router.post('/', (req, res, next)=>{

    bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(req.body.password, salt, function(err, hash) {
            const _user = new User({
                _id: new mongoose.Types.ObjectId(),
                name: req.body.name,
                email:req.body.email,
                password:hash,
            })
            _user.save().then(result=>{
              
                res.status(200).json({
                    message:"Saved! "
                })
            }).catch(err=>{
            
                res.status(500).json({
                    err:err
                })
            }) 
        });
    });
  
    
  
})

module.exports = router;