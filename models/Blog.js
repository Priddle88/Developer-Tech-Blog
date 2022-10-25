// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');

// class Blog extends Model {
// }

// Blog.init(
//     {
//         newTitle: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
//         newContent: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             unique: true,
//         },
//         post_date: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             unique: true,
//         },
//         user_id: {
//             type: DataTypes.INTEGER,
//             references: {
//                 model: 'user',
//                 key: 'id',
//             },
//         },
//         // date: {
//         //     type: DataTypes.DATE,
//         //     allowNull: false,
//         // }
//     },
//     {
//         sequelize,
//         // timestamps: false,
//         // freezeTableName: true,
//         // underscored: true,
//         modelName: 'blog',
//     }
// );

// module.exports = Blog;
