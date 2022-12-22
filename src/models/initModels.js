const Users = require('./users.models')
const RecoveryPasswords = require('./recoveryPasswords.models')
const Posts = require('./posts.models')
const Likes = require('./likes.models')
const Follows = require('./follows.models')
const Comments = require('./comments.models')

const initModels = () => {
    //? FK = RecoveryPasswords
    Users.hasMany(RecoveryPasswords)
    RecoveryPasswords.belongsTo(Users)

    //? Users - Posts  =>FK (Posts) 
    Users.hasMany(Posts)
    Posts.belongsTo(Users)

    //? Users - Likes  =>FK (Likes) 
    Users.hasMany(Likes)
    Likes.belongsTo(Users)

    //? Posts - Likes  =>FK (Likes) 
    Posts.hasMany(Likes)
    Likes.belongsTo(Posts)


//? Users - Follows (Following)
Users.hasMany(Follows)
Follows.belongsTo(Users, {
    as: "following",
    foreignKey: "userId2"
})

Follows.belongsTo(Users, {
    as: 'followers',
    foreignKey: 'userId'
})


}

module.exports = initModels