module.exports = app => {
    const user= require("../controllers/user.controller");
    const authJwt = require('../helper/role.auth')
     var router = require("express").Router();
  
     
    router.post("/forgotpassword", user.sendforgetLink);
    router.put("/changepassword",[authJwt.verifyToken],user.resetPassword);
    router.post("/resetPassword",[authJwt.verifyResetToken], user.forgotPassword);
    
    router.post("/createuser", user.createUser);
    router.post("/signin", user.signin); 
    router.get("/getusers",  [authJwt.verifyToken , authJwt.isAdmin], user.findAllUserWithSearch);
    router.get("/:id?",[authJwt.verifyToken], user.finduser);
    router.put("/:id?",[authJwt.verifyToken], user.updateUser);
    router.delete("/deleteuser/:id?",[authJwt.verifyToken , authJwt.isAdmin], user.deleteUser);

    app.use('/api/user', router);
  };
