const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Post extends Model { }

Post.init(
    {
        heading: {
            type: DataTypes.STRING,
        },
        body: {
            type: DataTypes.STRING,
        },
        // user_id: {
        //     type: DataTypes.INTEGER,
        //     references: {
        //         model: 'user',
        //         key: 'id',
        //     },
        // },
    },
    {
        sequelize,
    }
);

module.exports = Post;
