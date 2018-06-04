const article = require('../models/article.model');
const router = require('express').Router();

router.post('/article', (req,res)=>{
    let new_article = new Article({
        title: req.body.title,
        article: req.body.article,
        status: req.body.status,
        author: req.body.author
    })
    new_article.save(err=>{
        if(err){console.log(err.message)}
        res.json({res: "Successfully posted"})
    })
})

router.get('/article', (req,res)=>{
    article.find()
    .exec((err, article)=>{
        if(err){console.log(err)}
        res.json(article);
    })
})

module.exports = router;