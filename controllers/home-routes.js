const router = require('express').Router();
const { Blog, User, Posts } = require('../models');

// GET all posts for homepage
router.get('/', async (req, res) => {
  try {
    const dbBlogData = await Blog.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    const blogs = dbBlogData.map((blog) =>
      blog.get({ plain: true })
    );

    // const userName = dbUserData.map((newName) => {

    // })

    res.render('homepage', {
      blogs,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(420).json(err);
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
