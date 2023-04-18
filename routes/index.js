const express=require("express");
const router=express.Router();
const userController=require("../controller/userController")
const postController=require("../controller/postController")





router.get('/',function(req,res){
    return res.render('home');
});

router.post("/signup",userController.signup)
router.post("/signin",userController.signin)
router.post("/signout",userController.signout)
router.post("/welcome",postController.createPost);
router.post("/deletePost",postController.deletePost)
// router.get("/signin",userController.signin)










router.get("/",userController.home);
router.get("/about",userController.about);
router.get("/fakeapi",userController.fakeapi);








module.exports=router;