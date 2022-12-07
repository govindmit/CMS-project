const { hashPassword, isValidPassword, generateToken } = require("../helper/auth");
const { sendMail } = require("../helper/mail.helper");
const db = require("../models");
const User = db.User;
const Role = db.Role;
const Op = db.Sequelize.Op;

exports.createUser = async(req, res) => {
   const {name,email,password,phone,role} = req.body ;
    try {
      if (!name || !email || !password || !phone || !role) {
        res.status(201).send({ message: "field should not be empty" });
        return
      }
     const alreadyExistUser = await User.findOne({where: {email: email,isDeleted:false} });
       if(alreadyExistUser){
        res.status(201).send({message:'User already exist with this email'})
        return
       } 
    const checkrole= await Role.findOne({where:{id:role}});
    if(!checkrole){res.status(201).send({message:'role not exist!'})
  return
}
      var hashPlainText = await hashPassword(password) // encrypted
      var userRequest = {
        name,
        email,
        password:hashPlainText,
        phone,
        role
      };
  
      await User.create(userRequest).then((response) => {
          if (response) {
            res.status(200).send({
              message: "User created successfully",
            });
          }
        })
        .catch((error) => {
          res.status(500).send({message:error.message});
        });
    } catch (error) {
         res.status(400).send({
            
            message:error.message || 'Oops !something went wrong in while creating the user',

         })
    }
  };


exports.signin = async (req, res) => {
    try{
        const {email , password} = req.body
        if(!email || !password){
            res.status(201).send({message:'email and password are required !'});
            return
        }
        const user = await User.findOne({  where: { email: req.body.email, isDeleted:false},
            
          });
        if(!user){
            res.status(201).send({message:'user not exist with this email !'})
            return
           }    
        const role = await Role.findOne({where:{id:user.role}, attributes: {exclude: ['isDeleted']},});
        const validPasword = await isValidPassword(password,user.password);
        if(!validPasword){
            res.status(201).send({message:'invalid password!'});
            return
        }
       const token = await generateToken({id:user.id,email:user.email,role:role})
       res.status(200).cookie('x-access-token', token, { maxAge: 86400, secure: false, httpOnly: true }).send({
                  accessToken: token
                  });
             
    }catch(error){
        res.status(400).send({
            message:"Oops ! something went wrong in login !",
            subError:error.message
        })
    }
   };

exports.forgotPassword = async(req,res)=>{
    try{
      console.log("req.userid",  req.email);
        const {password , confirm_password}= req.body ;
        if(!password || !confirm_password){
          res.status(201).send({message: 'password & confirm_password fields are required !'});
         return
        }
        const user = await User.findOne({where:{email: req.email,isDeleted:false}});
        if(!user) {
            res.status(201).send({message:"Email not exist !"})
            return
        } 
        if(password !== confirm_password) {
          res.status(201).send({message:"Password and confirm password are not matched"});
          return
        }
        
           user.password = await hashPassword(confirm_password)
           user.save()
            res.status(200).send({
                message:"password change succesfully !"
            })
      
    }catch(error){
        res.status(400).send({
            message:"Oops ! something went wrong in forgot password",
            subError:error.message
        })
    }
} 

exports.sendforgetLink = async(req,res) =>{
  try{
      const {email} = req.body ;
      if(!email){
          res.status(201).send({
              message:"email is required !"
          })
          return
      }
      const mailsend = await sendMail(email);
        if(mailsend){
              res.status(200).send({
                  message:'Mail Sent Successfully ! Please Check Your Email'
              })
         }
      
  }catch(error){
      res.status(400).send({
          message:"Oops! something went wrong in send forgot pasword link",
          subError:error.message
      })
  }
}


// Find a single user with an id
exports.finduser= async(req, res) => {
  try{
    
    const id = req.params.id ? req.params.id: req.userId;
    if(!id){
      res.status(201).send({message:'id is required !'})
      return
    }
    const user = await User.findOne({  
      where: { id: id, isDeleted:false},
      attributes: {exclude: ['password']},
      // include: db.Role
    });
    if(!user){
        res.status(201).send({message:'user not found'})
        return
      }    
       const role = await Role.findOne({where:{id:user.role}, attributes: {exclude: ['isDeleted']},});
       user.role= role
      res.status(200).send(user)


  }catch(error){
    res.status(400).send({
      message:'Error retrieving user with id',
      subError:error.message
    })
  }
 

};

exports.updateUser= async(req,res)=>{
  try{
 

    const id = req.params.id ? req.params.id:  req.userId;
    const body = req.body;

    
    if(!id){
      res.status(201).send({message:'id is required !'})
      return
    }
    if(!body){
      res.status(201).send({
          message:'body should not be empty !'
      })
      return
  }
    const user = await User.findOne({  where: { id: id, isDeleted:false} });
    if(!user){
        res.status(201).send({message:'user not found'})
        return
      }  
     body['updatedBy'] = req.userId
      await User.update(body, {where: { id: id }}).then(num => {
          if (num == 1) {
            res.send({
              message: "user updated successfully !"
            });
          } else {
            res.send({
              message: `Cannot update user with id=${id}. Maybe user was not found !`
            });
          }
        }).catch(err => {
          res.status(500).send({
            message: "Error update user with id=" + id,
            subError:err.message
          });
        });
    
  }catch(error){
    res.status(400).send({
      message:'Oops! something went wrong in update the user',
      subError:error.message
    })
  }
}

exports.findAllUserWithSearch = async(req,res)=>{
  try{
    const filter = req.query.search;
    var condition = filter ? { 
      [Op.or]:[{ name: filter }, { email: filter },{status:filter}],
      [Op.and]:[{isDeleted:false }]
    }  : {isDeleted:false };

   const users = await User.findAll({ where: condition });
   if(users.length === 0){
      res.status(200).send({
        message:'No result found !'
      })
      return
    }
    

    if(users.length === 0){
      res.status(201).send({
        message:'users not found !',
          data:pages
      })
      return
    }
      for(var i= 0 ; i< users.length ;i++){
        const roleid = users[i].dataValues.role
        const role = await Role.findOne({where:{id:roleid}, attributes: {exclude: ['isDeleted']},});
        users[i].dataValues.role = role
      }

    // const role = await Role.findOne({where:{id:users.role}, attributes: {exclude: ['isDeleted']},});
    // users.role= role
    
    res.status(200).send(users) 
    
  }catch(error){
    res.status(400).send({
      message:'Oops! something went wrong while fetching the users',
      subError:error.message
    })
  }
}


exports.deleteUser = async(req,res)=>{
  try{
    const id = req.params.id;
    if(!id){
        res.status(201).send({message:'user id not found'})
        return
    }
   await User.update({deletedBy:req.userId ,isDeleted:true}, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "user deleted successfully."
          });
        } else {
          res.send({
            message: `Cannot delete user with id=${id}. Maybe user was not found !`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error delete user with id=" + id
        });
      });
  }catch(error){
    res.status(400).send({
      message:'Oops! something went wrong in delete the user '+id,
      subError:error.message
    })
  }
}

exports.resetPassword = async(req,res)=>{
  try{
        console.log("req.userid", req.userId);

       const {old_password , new_password , confirm_password} = req.body ;
          console.log("req.body ======> ",req.body);
       if(!old_password || !new_password || !confirm_password){
         res.status(201).send({
             message:'body should not be empty !'
         })
         return
     }
     if(new_password !== confirm_password){
      res.status(201).send({
        message:' new password and confirm password mismatched  !'
    })
    return
     }
       const user = await User.findOne({  where: { id: req.userId, isDeleted:false} });
       const validPasword = await isValidPassword(old_password,user.password);
       if(!user){
           res.status(201).send({message:'user not found'})
           return
         } 

         if(!validPasword){
          res.status(201).send({message:'invalid old password!'});
          return
        }
        var hashPlainText = await hashPassword(confirm_password)
        const data ={
          password :hashPlainText
        }
         await User.update(data, {where: { id: req.userId }}).then(num => {
             if (num == 1) {
               res.send({
                 message: "user password change successfully !"
               });
             } else {
               res.send({
                 message: `Cannot change password user with email=${email}. Maybe user was not found !`
               });
             }
           }).catch(err => {
             res.status(500).send({
               message: "Error reset password of  user with email=" + email
             });
           });
  }catch(error){
    res.status(400).send({
      message:'Oops! something went wrong while reset the password',
      subError:error.message
    })
  }
}