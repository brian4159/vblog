const { getList,getDetail,newBlog ,upadateBlog,delBlog} = require('../controller/blog')
const {SuccessModel,ErrorModel} =require('../model/resModel')

//统一的登录验证函数
const checkLogin = (req)=>{
    if(!req.session.username){
        return Promise.resolve(new ErrorModel('尚未登录'))
    }
}

const handleBlogRouter = (req, res) => {
    const method = req.method
    const id = req.query.id

    const loginCheck = checkLogin(req)
    if(loginCheck){
        return loginCheck
    }
    //获取博客列表
    if (method == 'GET' && req.path === '/api/blog/list') {
        const author = req.query.author || ''
        const keyword = req.query.keyword || ''
        // const listData = getList(author, keyword)
        const result = getList(author, keyword)
        return result.then(listData=>{
            return new SuccessModel(listData)
        })
      
    }
    //获取博客详情
    if (method == 'GET' && req.path === '/api/blog/detail') {
    
        const result  = getDetail(id)
        return result.then(data=>{
            return new SuccessModel(data)
        })
    }
    //新建一篇博客
    if (method == 'POST' && req.path === '/api/blog/new') { 
        req.body.author = req.session.username
        const result  = newBlog(req.body)
        return result.then(data=>{
            return new SuccessModel(data)
        })
    }
    //更新一篇博客
    if (method == 'POST' && req.path === '/api/blog/update') {
        const result  = upadateBlog(id,req.body)
        return result.then(val=>{
            if(val){
                return new SuccessModel()
            }else{
                return new ErrorModel('更新博客失败')
            }
        })
      
        
    }
    //删除博客的接口
    if (method == 'POST' && req.path === '/api/blog/delete') {
        const author = req.session.username
        const result = delBlog(id,author)
       return result.then(val=>{
        if(val){
            return new SuccessModel()
        }else{
            return new ErrorModel('删除博客失败')
        }
       }) 
    }
}
module.exports = handleBlogRouter