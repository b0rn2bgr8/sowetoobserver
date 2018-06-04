const category = require('../models/category.model');
const router = require('express').Router();

router.post('/category', (req,res)=>{
    let new_category = new Category({
        name: req.body.name,
        description: req.body.description
    })
    new_category.save(err=>{
        if(err){console.log(err)}
        res.json({res:"Successfully posted"})
    })
});

router.get('/category', (req,res)=>{
    category.find()
    .exec((err,category)=>{
        if(err){console.log(err)}
        res.json(category);
    })
})

//router.delete('/cat')

module.exports = router;