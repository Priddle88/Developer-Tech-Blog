const router = require('express').Router();
const { Blog, User, Post, Comment } = require('../models');

// GET all posts for homepage
router.get('/', async (req, res) => {
  try {
    // const dbBlogData = await Blog.findAll({
    //   include: [
    //     {
    //       model: User,
    //       attributes: ['username'],
    //     },
    //   ],
    // });

    const postData = await Post.findAll({
      include: [User],
    });

    // const blogs = dbBlogData.map((blog) =>
    //   blog.get({ plain: true })
    // );
    console.log(postData);

    const posts = postData.map((post) => post.get({ plain: true }));

    console.log('THIS IS HERE!');
    console.log(posts);
    res.render('homepage', {
      posts,
      userId: req.session.userId,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(420).json(err);
  }
});

// get single post
router.get('/post/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        User,
        {
          model: Comment,
          include: [User],
        },
      ],
    });

    if (postData) {
      const post = postData.get({ plain: true });

      res.render('comment', { post });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/dashboard', async (req, res) => {
  try {
    res.render('dashboard', {
      loggedIn: req.session.loggedIn,

    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// Login route
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

module.exports = router;
