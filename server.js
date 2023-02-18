const express = require('express')
const articleRouter = require('./routes/articles')
const app = express()

// Sets up the view
app.set('view engine', 'ejs')

// Uses the article router
app.use('/articles', articleRouter)

// To render the index view
app.get('/', (req, res) => {
    const articles = [
        {
        title: "Test Article",
        createdAt: Date.now(),
        description: 'Test Description'
        },
        {
            title: "Test Article Numba 2",
            createdAt: Date.now(),
            description: 'Test Article 2 Description'
        },
        {
            title: "Test Article Numba 3",
            createdAt: Date.now(),
            description: 'Test Article 3 Description'
        }
    ]
    res.render('index', { articles: articles })
})

app.listen(5000)