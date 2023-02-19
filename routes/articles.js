const express = require('express')
const article = require('./../models/article')
const router = express.Router()

const Article = require('./../models/article')

// router.get('/', (req, res) => {
//     res.send("In articles")
// })

// This gets you to a new html page called "new"
router.get('/new', (req, res) => {
    res.render("articles/new")
})

// This gets you the article with the specified ID
router.get('/:id', (req, res) => {

})

// This posts a form item to the index page
router.post('/', async (req, res) => {
    const article = new Article({
        // Get the element values via element ID
        title: req.body.title,
        description: req.body.description,
        markdown: req.body.markdown,
    })

    try {
        article = await article.save()
        res.redirect(`/articles/${article.id}`)
    } catch (e) {
        res.render('articles/new', { article: article })
    }
    
})

module.exports = router