const router = require('express').Router();
const { Blog } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const dbBlogData = await Blog.create({
            name: req.body.name,
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