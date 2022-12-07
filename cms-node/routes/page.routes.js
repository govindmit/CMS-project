module.exports = app => {
    const page = require("../controllers/page.controller");
    const authJwt = require('../helper/role.auth')
    var router = require("express").Router();
  
    // Create a new role
    router.post("/createpage",  [authJwt.verifyToken], page.createPage);
   // Retrieve all page
    router.get("/getpages/:id?", [authJwt.verifyToken],page.findAllPageWithSearch);
   
    //update the page with status or author
    router.put("/updatepage/:id", [authJwt.verifyToken], page.updatePage);

    // Delete a page with id
    router.delete("/deletepage/:id",[authJwt.verifyToken,authJwt.isAdmin], page.deletePage);
    
    router.get('/:id',[authJwt.verifyToken] ,page.findPageById);
    app.use('/api/page', router);
    
  };
  