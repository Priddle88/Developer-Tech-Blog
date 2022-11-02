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

router.delete('/:id', async (req, res) => {
    try {
        const [commentData] = Comment.destroy({
            where: {
                id: req.params.id,
            },
        });

        if (commentData > 0) {
            res.status(200).end();
        } else {
            res.status(404).end();
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
