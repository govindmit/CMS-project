
const db = require("../models");
const Page = db.Page;
const User = db.User;
const Role = db.Role
const Op = db.Sequelize.Op;


exports.createPage = async(req,res)=>{
    try{
        const {status ,slug ,name ,author,description,html} = req.body;
        if(!name || !author || !description || !html || !slug || !status){
            res.status(201).send({
                message:'required fields are missing may be : name,author,description,html,slug,status!'
            })
            return
        }
         const alreadyName = await Page.findOne({where:{name:name,isDeleted:false,status:'published'}});
         if(alreadyName){
            res.status(201).send({
                message:'The page name already exist with published'
            });
            return
        }
        const page = await Page.create(req.body);
        if(!page){
            res.status(400).send({message:'page not created !'});
            return
        }
        res.status(200).send({
            message:'Page Created Successfully !'
        });
    }catch(error){
        res.status(400).send({
            message:'Oops! something went wrong while creating the page',
            subError:error.message
        })
    }
}
exports.findAllPageWithSearch = async(req,res)=>{
    try{
    const filter = req.query.search; 
    const id = req.params.id;
    var authorid ;
     const author = filter ? await User.findOne({where:{name:filter}}) :null;
     if(id){
      const page = await Page.findOne({where:{id:id}});
      res.status(200).send(page)
      return
     }
    if(author){
      authorid = author.dataValues.id
    }
      var condition = filter ? { 
         [Op.or]:[{ name: filter }, { author: authorid? authorid:filter },{status:filter}],
         [Op.and]:[{isDeleted:false }],  
        
      }  : {isDeleted:false };
     const pages = await Page.findAll({ where: condition });

    if(pages.length === 0){
      res.status(201).send({
        message:'page not found !',
          data:pages
      })
      return
    }
      for(var i= 0 ; i< pages.length ;i++){
        const roleid = pages[i].dataValues.author
        const str =  pages[i].dataValues.html;
        const role = await Role.findOne({where:{id:roleid}, attributes: {exclude: ['isDeleted']},});
        pages[i].dataValues.author = role

      
      pages[i].dataValues.html = str.replace(/[\r\n]/gm, '');
      }
    
    
      res.status(200).send(pages) 
      
    }catch(error){
      res.status(400).send({
        message:'Oops! something went wrong while fetching the pages',
        subError:error.message
      })
    }
}

exports.updatePage = async(req,res)=>{
    try{
            
            const loginRole = req.loginRole;
            const id = req.params.id;
            const body = req.body;
            const statusKey  = Object.keys(body)
            if(loginRole === 'Author'||'Subscriber' && statusKey.includes('status')){
                res.status(201).send({
                  message:' Your role is Author/Subscriber ! you can manage the page but can not change the status'
                });
                return
            }
            var statusvalue ;
            if(statusKey.includes('status') ){
                statusvalue= body['status']
            }
            if(!id){
                res.status(201).send({message:"please provide page id"});
                return
            }
            if(!body){
                res.status(201).send({
                    message:'body should not be empty !'
                })
                return
            }
            const page = await Page.findOne({  where: { id: id, isDeleted:false} });
            if(!page){
                res.status(201).send({message:'page not found'})
                return
            }  
            if(statusvalue === 'published'){
              body['slug'] = page.name
            }
            await Page.update(body, {where: { id: id }}).then(num => {
                  if (num == 1) {
                    res.send({
                      message: "page updated successfully !"
                    });
                  } else {
                    res.send({
                      message: `Cannot update page with id=${id}. Maybe page was not found !`
                    });
                  }
                }).catch(err => {
                  res.status(500).send({
                    message: "Error update page with id=" + id
                  });
                });
             
          

    }catch(error){
        res.status(400).send({
            message:'Oops ! something went wrong while updating the page',
            subError:error.message
        })
    }
}


exports.deletePage = async(req,res)=>{
    try{
      const id = req.params.id;
      if(!id){
          res.status(201).send({message:'page id not found'})
          return
      }
     await Page.update({isDeleted:true}, {
        where: { id: id }
      })
        .then(num => {
          if (num == 1) {
            res.send({
              message: "page deleted successfully."
            });
          } else {
            res.send({
              message: `Cannot delete page with id=${id}. Maybe page was not found !`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Error delete page with id=" + id
          });
        });
    }catch(error){
      res.status(400).send({
        message:'Oops! something went wrong in delete the page '+id,
        subError:error.message
      })
    }
  }

exports.findPageById = async(req,res)=>{
  try{
      const id = req.params.id;
      if(!id){
        res.status(201).send({message:'page id required !'})
        return
      }
      const page = await Page.findOne({where:{id:id}});
      res.status(200).send(page)
  }catch(error){
    res.status(400).send({message:'Oops! something went wrong in get page'})
  }
}
  