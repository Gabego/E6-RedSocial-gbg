const {DataTypes} = require('sequelize')

const db = require('../utils/database')

const Users = require('./users.models')

const Posts = db.define('posts' ,{
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
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    }
    })

    module.exports = Posts