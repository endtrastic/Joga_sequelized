const express = require('express')
const router = express.Router()
const articleController = require('../controllers/article')
const articleAdminController = require('../controllers/admin/article')

router.get('/', articleController.getAllArticles)
router.get('/author/:id', articleController.GetAllOfTheAuthorsArticlesByID)
router.get('/article/:slug', articleController.getArticleBySlug)
router.post('/admin/article/create', articleAdminController.createArticle)
router.get('/admin/article/edit/:id', articleAdminController.updateArticle); 
router.delete('/admin/article/delete/:id', articleAdminController.deleteArticle); 


module.exports = router;