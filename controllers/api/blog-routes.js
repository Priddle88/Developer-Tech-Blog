const router = require('express').Router();
const { Blog } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const dbBlogData = await Blog.create({
            title: req.body.title,
            content: req.body.content,
            user_id: req.body.user_id,
        });

        req.session.save(() => {
            req.session.loggedIn = true;

            res.status(200).json(dbBlogData);
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


module.exports = router;