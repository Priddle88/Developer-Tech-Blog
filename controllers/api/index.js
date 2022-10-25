const router = require('express').Router();

const userRoutes = require('./user-routes');
// const blogRoutes = require('./blog-routes');
const postRoutes = require('./post-routes');

router.use('/users', userRoutes);
// router.use('/blog', blogRoutes);
router.use('/post', postRoutes);

module.exports = router;
