const { login} = require('../controller/user')
const {SuccessModel,ErrorModel} =require('../model/resModel')
const handleUserRouter=(req,res)=>{
    const method = req.method
    //登录
    if(method  == 'POST' && req.path === '/api/user/login'){
        const {username,password}  =req.body
        const result = login(username,password)
        if(result){
            return new SuccessModel()
        }else{
            return  new ErrorModel('账户或者密码错误')
        }
        
    }
}

module.exports =  handleUserRouter