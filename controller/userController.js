// import User to use it here

const User=require("../models/userSchema")
const Post=require("../models/postSchema");




module.exports.home=function(req,res){
    return res.render("home");
}

// about page
module.exports.about=function(req,res){
    return res.render("about");
}

// fakeApi
module.exports.fakeapi=function(req,res){
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(output => {
            return res.render("about",{
                arr:output
            });
      })
}


module.exports.signup= async function(req,res){
    console.log(req.body);
    // finding out if new new mail we entered is already exist
    let user=await User.find({email:req.body.email});

    // ye user array ban gaya hai jisme ek hi elment hoga agar hua toh
    if(user.length>0){
        return res.render("userAlreadyExist",{
            user:user[0]
        });
    }
    else{
        if(req.body.password!=req.body.confirm_password){
            return res.end("<h1>password and confirm password does not match</h1>")
        }
        let newUser=await User.create({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password
        })

        return res.render("welcome",{
            allPost:{},
            user:newUser
        })
    }

};


module.exports.signin= async function(req,res){
    let user=await User.find({email:req.body.email});
    //If we have this user in our mongodb database then we should permit him to logged in otherwise Send him/her to signin page
    if(user.length>0){
        if(user[0].password!=req.body.password){
            console.log('you have entered wrong password ');

            return res.render('wrongPassword');
        }
        console.log("successfully signed in")
        let allPost=await Post.find({});
        console.log("i am signin wala conmsole log",user[0])
        return res.render('welcome',{
            allPost:allPost,
            user:user[0]
        })
    }else{
        // console.log('User not present');
        return res.render('signin');
    }
}


module.exports.signout=function(req,res){
    console.log("logged out successfully")
    return res.render("signin");
}


