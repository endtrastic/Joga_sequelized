const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://arm:qwerty@localhost:3306/joga_sequelize')

const models = require('../models')

const getAllArticles = (req, res) => {
    models.Article.findAll()
    .then(articles => {
        console.log(articles)
        return res.status(200).json({ articles });
    })
    .catch(error => {
        return res.status(500).send(error.message)
    })
}

const getArticleBySlug = (req, res) => {
    models.Article.findOne({
        where: {
            slug: req.params.slug
        },
        include: [{
            model: models.Author
    }],
    })
    .then(article => {
        console.log(article)
        return res.status(200).json({ article })
    })
    .catch(error => {
        return res.status(500).send(error.message)
    })
}

const GetAllOfTheAuthorsArticlesByID = async (req, res) => {

    const authorId = req.params.id; 

    const author = await models.Author.findByPk(authorId, {
        include: [{
            model: models.Article, 
            as: 'Articles' 
        }]
    });

    if (!author) {
        return res.status(404).json({ message: 'Autorit ei leitud' });
    }

    const articles = author.Articles;
    return res.status(200).json({ articles });

};


module.exports = {
    getAllArticles,
    getArticleBySlug,
    GetAllOfTheAuthorsArticlesByID
}