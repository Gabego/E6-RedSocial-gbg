const commentControllers = require('./comments.controllers')

const getAllCommentsByPost = (req, res) => {
    const id = req.params.id 
    commentControllers.findAllCommentsFromPost(id) 
        .then(data => {
            if(data){
                res.status(200).json({
                    count: data.length,
                    users: data
                })
            } else {
                res.status(404).json({message: 'Invalid ID'})
            }
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}

const postComment = (req, res) => {
    const content = req.body
    const userId = req.user.id 
    const postId = req.params.id 
    commentControllers.createComment({content, userId, postId})
        .then(data => {
            if(data){
                res.status(201).json(data)
            } else {
                res.status(400).json({message: err.message})
            }
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}


module.exports = {
    getAllCommentsByPost,
    postComment
}