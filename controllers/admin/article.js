const Sequelize = require('sequelize');
const sequelize = new Sequelize('mysql://arm:qwerty@localhost:3306/joga_sequelize');

const models = require('../../models');

const createArticle = (req, res) => {
    let name = req.body.name;
    let slug = req.body.slug;
    let image = req.body.image;
    let body = req.body.body;
    let author_id = req.body.author_id || null;  
    
    const newArticle = models.Article.create({
        name: name,
        slug: slug,
        image: image,
        body: body,
        author_id: author_id,
        published: new Date().toISOString().slice(0, 19).replace('T', ' '),
    })
    .then(article => {
        console.log(article);
        return res.status(200).json({message: 'New article added'});
    })
    .catch(error => {
        return res.status(500).send(error.message);
    });
};

const updateArticle = (req, res) => {
    const articleId = req.params.id;
    models.Article.findByPk(articleId)
    .then(article => {
        console.log('Article fetched:', article);
        if (!article) {
            return res.status(404).json({ error: "Article not found" });
        }

        return models.Author.findAll()
            .then(authors => {
                console.log('Authors might be fetched:', authors.length);
                res.status(200).json({ article, authors });
            })
            .catch(err => {
                console.error(err);
                res.status(500).json({ error: "Error fetching authors", details: err.message });
            });
    })
    .catch(err => {
        console.error(err);
        res.status(500).json({ error: "Error fetching article", details: err.message });
    });
}

const deleteArticle = (req, res) => {
    const articleId = req.params.id;

    models.Article.destroy({
        where: { id: articleId }
    })
    .then(() => {
        res.status(200).json({ message: "Article deleted successfully!" });
    })
    .catch(err => {
        res.status(500).send("Error deleting article.");
    });
};



module.exports = {
    createArticle,
    updateArticle,
    deleteArticle
};
