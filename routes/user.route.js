const User = require('../models/user.model');
const router = require('express').Router();

//Create a user
router.post('/user', (req, res)=>{
    let new_user = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        title: req.body.title,
        contact_no: req.body.contact_no,
        email: req.body.email,
        password: req.body.password,
        isAdmin: req.body.isAdmin,
        isAuthor: req.body.isAuthor
    });
    new_user.save(err=>{
        if(err){console.log('err')}
        res.json({res: "Successful"})
    });
})

//Display/get/retreive all users
router.get('/user/', (req, res, next)=>{
    User.find({}, (err, foundUser)=>{
        //cheching any errors
        if(err) return next(err);
        //Checking if the results have been retained
        if(!foundUser){
            return res.json({message: "No users found."})
        }
        res.json(foundUser)
    });
});

//Display/get/retreive one user
router.get('/user/:id', (req, res)=>{
    User.findOne({_id:req.params.id}, (err, foundUser)=>{
        if(err) return next(err);
        if(!foundUser){
            return res.json({message: req.firstname + " was not found"})
        }
        res.json(foundUser);
    });
});

//Delete one user
router.delete('/user/:id', function(req, res){
    User.findByIdAndRemove({_id:req.params.id},
        function(err,foundUser){
        if(err) return next(err);
        res.json("Deleted successful");
    })
});

//Update user
router.put('/user/:id', function(req,res,next){
    User.findById(req.params.id, function(err, foundUser){
        if(err) return next(err);

        if(req.body.firstname){
            foundUser.firstname = req.body.firstname;
        }
        if(req.body.lastname){
            foundUser.lastname = req.body.lastname;
        }
        if(req.body.title){
            foundUser.title = req.body.title;
        }
        if(req.body.email){
            foundUser.email = req.body.email;
        }
        if(req.body.contact_no){
            foundUser.contact_no =req.body.contact_no;
        }
        if(req.body.isAdmin){
            foundUser.isAdmin = req.body.isAdmin;
        }
        if(req.body.isAuthor){
            foundUser.isAuthor = req.body.isAuthor;
        }
        if(req.body.password){
            foundUser.password = req.body.password;
        }
        foundUser.save(function(err, updatedUser){
            if(err) return next(err);
            let obj = {
                message:"Updated"
            }
            res.json(obj);
        });
    })
});

module.exports = router;