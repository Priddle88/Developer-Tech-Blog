const router = require('express').Router();
const { Post } = require('../../models/');
// const withAuth = require('../../utils/auth');

router.post('/', async (req, res) => {
    const body = req.body;
    // console.log(body);
    // console.log(req.session);
    try {
        const newPost = await Post.create({ ...body, userId: req.session.userId });
        res.json(newPost);
    } catch (err) {
        res.status(500).json(err);
    }
});


// router.post('/', async (req, res) => {
//     try {
//         const postData = await Blog.create({
//             title: req.body.title,
//             content: req.body.content,
//         });

//         req.session.save(() => {
//             req.session.loggedIn = true;
//             res.status(200).json(postData);
//         });
//     } catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//     }
// });


router.put('/:id', async (req, res) => {
    console.log("YO YO");
    try {
        const [affectedRows] = await Posts.update(req.body, {
            where: {
                id: req.params.id,
            },
        });

        if (affectedRows > 0) {
            res.status(200).end();
        } else {
            res.status(404).end();
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

// router.delete('/:id', async (req, res) => {
//     try {
//         const [affectedRows] = Posts.destroy({
//             where: {
//                 id: req.params.id,
//             },
//         });

//         if (affectedRows > 0) {
//             res.status(200).end();
//         } else {
//             res.status(404).end();
//         }
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

module.exports = router;

