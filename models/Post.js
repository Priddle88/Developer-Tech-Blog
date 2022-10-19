const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Posts extends Model { }

Posts.init(
    {
        title: DataTypes.STRING,
        content: DataTypes.STRING,
        // date: DataTypes.DATE,
    },
    {
        sequelize
    }
);

module.exports = Posts;
