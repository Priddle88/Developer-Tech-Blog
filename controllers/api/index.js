const router = require('express').Router();
const userRoutes = require('./user-routes');
// const blogRoutes = require('./blog-routes');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');

router.use('/users', userRoutes);
// router.use('/blog', blogRoutes);
router.use('/post', postRoutes);
router.use('/comment', commentRoutes);

module.exports = router;
