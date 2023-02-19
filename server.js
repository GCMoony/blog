/*
    To run the server:

        npm run [scriptName]

        i.e. this project

        npm run devStart
*/

const express = require('express')
const articleRouter = require('./routes/articles')
const app = express()

const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/blog');
mongoose.set('strictQuery', false);

// Sets up the view
app.set('view engine', 'ejs')



// Use the public folder for different assets, like pics or stylesheets
app.use('/public', express.static('public'));

// To get the form data
app.use(express.urlencoded({ extended: false }))



// To render the index view
// This will show in the index.ejs file
app.get('/', (req, res) => {
    const articles = [
        {
        title: "Test Article",
        createdAt: new Date(),
        description: 'Test Description'
        },
        {
            title: "Test Article Numba 2",
            createdAt: new Date(),
            description: 'Test Article 2 Description'
        },
        {
            title: "Test Article Numba 3",
            createdAt: new Date(),
            description: 'Test Article 3 Description'
        }
    ]
    res.render('articles/index', { articles: articles })
})

// Uses the article router
app.use('/articles', articleRouter)

app.listen(5000)