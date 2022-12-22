const {DataTypes} = require('sequelize')

const db = require('../utils/database')
const Users = require('./users.models')
const Posts = require('./posts.models')

const Likes = db.define('likes' ,{
    id: {
        type: DataTypes.UUID,
        primaryKey: true
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: Users,
            key: 'id'
        }
    },
    postId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: Posts,
            key: 'id'
        }
    }
})

module.exports = Likes