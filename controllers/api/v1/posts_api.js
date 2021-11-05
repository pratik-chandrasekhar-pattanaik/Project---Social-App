const Post = require('../../../models/post');
const Commetn = require('../../../models/comment');

module.exports.index = async function(req, res){
    let posts = await Post.find({})
    .sort('-createdAt')
    .populate('user')
    .populate({
        path: 'comments',
        populate: {
            path: 'user'
        }
    });
    
    return res.json(200, {
        message: "List of Posts",
        posts: posts
    })
}

module.exports.destroy = async function(req, res){
    try {
        let post = await Post.findById(req.params.id);
        if(post.user == req.user.id){
            post.remove();

            await Comment.deleteMany({posts: req.params.id});
            // return res.redirect('back');
            return res.json(200, {
                message: "Post and associated comments deleted successfully"
            });
        }
        else{
            return res.json(401, {
                message: "You cannot delete this post!"
            });
        }
    } 
    catch (err) {
        console.log('Error in posts api', err);
        return res.json(500, {
            message: "Internal Server Error"
        });
    }
}