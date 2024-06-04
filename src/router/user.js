const { login} = require('../controller/user')
const {SuccessModel,ErrorModel} =require('../model/resModel')
const {set} = require('../db/redis')

const handleUserRouter=(req,res)=>{
    const method = req.method
    //登录
    if(method  == 'GET' && req.path === '/api/user/login'){
        // const {username,password}  =req.body
        const {username,password}  =req.query
        const result = login(username,password)

        return result.then(data=>{
         
            if(data.username){
                req.session.username  = data.username
                req.session.realname  = data.realname
                //同步redis
                set(req.sessionId,req.session)
                return new SuccessModel() 
            }else{
                return new ErrorModel('登录失败')
            }
        })
      
    }

    if(method  == 'GET' && req.path === '/api/user/loginT'){
        if(req.session.username){
            return Promise.resolve(new SuccessModel({
                session:req.session
            }))
        }
        return Promise.resolve(new ErrorModel('尚未登录'))
    }
}

module.exports =  handleUserRouter