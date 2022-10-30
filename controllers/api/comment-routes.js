const router = require('express').Router();
const { Comment } = require('../../models/');

router.post('/', async (req, res) => {
    try {
        const userComment = await Comment.create({
            ...req.body,
            userId: req.session.userId,
        });
        res.json(userComment);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
