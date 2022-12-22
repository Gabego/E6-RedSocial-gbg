const uuid = require('uuid')
const Comments = require('../models/comments.models')
const Users = require('../models/users.models')

const findAllCommentsFromPost = async (postId) => {
    const data = await Likes.findAll({
        where :{
            postId: postId
        },
        include: {
            model: Users,
            attributes: ['id', 'firstName', 'lastName']
        }
    })
    return data
}

const createComment = async (obj) => {

    const validate = await Comments.findOne({
        where: {
            content: obj.content,
            userId: obj.userId,
            postId: obj.postId
        }
    })
    if(validate){
        return null
    }

    const data = await Comments.create({
        id: uuid.v4(),
        userId: obj.userId,
        postId: obj.postId
    })
    return data
}


module.exports = {
    findAllCommentsFromPost,
    createComment
}