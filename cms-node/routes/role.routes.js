module.exports = app => {
    const role = require("../controllers/role.controller");
    const authJwt = require('../helper/role.auth')
    var router = require("express").Router();
  
    // Create a new role
    router.post("/createrole", role.createRole);
  
    // Retrieve all Role
    router.get("/getrole/:id?",role.findAllRoles);
    
    // Delete a role with id
    router.put("/deleterole/:id",[authJwt.verifyToken , authJwt.isAdmin], role.deleteRole);
    app.use('/api/role', router);
  };
  