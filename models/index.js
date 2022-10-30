const User = require('./User');
// const Blog = require('./Blog');
const Post = require('./Post');
const Comment = require('./Comment');

// User.hasMany(Blog, {
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE'
// });

// Blog.belongsTo(User, {
//     foreignKey: 'user_id',
// });

// Post.belongsTo(User, {
//     foreignKey: 'userId',
//     onDelete: 'CASCADE',
// });

Post.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

Post.hasMany(Comment, {
    foreignKey: 'postId',
    onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
})

module.exports = { User, Post, Comment };
