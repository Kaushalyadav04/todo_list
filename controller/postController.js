const Post=require("../models/postSchema");

module.exports.createPost=async function(req,res){
    let newPost=await Post.create({
        content:req.body.content,
        user:req.body.user
    })
    let allPost=await Post.find({}).populate("user");

    // console.log(allPost,"******this is all post")
    console.log(allPost[allPost.length-1].user,"this is user poplate wala********")


    console.log(req.body,"*******")

    // if(req.body.user==allPost[allPost.length-1].user._id){
    //     console.log("matched ids")
    // }
    

    return res.render("welcome",{
        user:allPost[allPost.length-1].user,
        allPost:allPost
    })
}

module.exports.deletePost=async function(req,res){
    
    let allPost=await Post.find({}).populate("user");
    await Post.deleteOne({_id:"req.body.blog_id"})

    // console.log("item removed")
    // console.log(req.body,"******post data*******")


    return res.render("welcome",{
        user:allPost[allPost.length-1].user,
        allPost:allPost
    })

    // return res.redirect("back");
}
