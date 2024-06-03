
const handleBlogRouter = require('./src/router/blog')
const handleUserRouter = require('./src/router/user')
const querystring = require('querystring');

const getCookieExpire = ()=>{
    const d = new Date()
    d.setTime(d.getTime()+24*60*60*1000)
    return d.toGMTString()
}

const SESSION_DATA ={}

const getPostData = (req) => {
    const promise = new Promise((resolve, reject) => {
     
        if (req.method !== 'POST') {
            resolve({})
            return
        }
        // if (req.headers['content-type'] !== 'application/json') {
        //     resolve({})
        //     return
        // }
        let postData = ''
        req.on('data', chunk => {
         
            postData += chunk.toString()
        })
        req.on('end', () => {
        
            if (!postData) {
                resolve({})
                return
            }
            resolve(
                JSON.parse(postData)
            )
        })
    })
    return promise
}
const serverHandle =(req,res)=>{
    //设置返回格式为json
    res.setHeader('Content-type','application/json')

    const url = req.url
     req.path = url.split('?')[0]
     req.query = querystring.parse(url.split('?')[1])

     req.cookie = {}
    const cookieStr = req.headers.cookie || ''
    cookieStr.split(';').forEach(element => {
        if(!element){
            return
        }
        const arr = element.split('=')
        const key  = arr[0].trim()
        const val = arr[1].trim()
        req.cookie[key] = val
    });

    //解析session
    let needSetCookie = false
    let userId = req.cookie.userid
    if(userId){
        if(!SESSION_DATA[userId]){
            SESSION_DATA[userId] = {}
        }
    }else{
        needSetCookie = true 
        userId = `${Date.now()}_${Math.random()}`
        SESSION_DATA[userId] = {}
    }
    req.session = SESSION_DATA[userId]
     getPostData(req).then(postData=>{
        req.body = postData;
        const blogResult = handleBlogRouter(req,res);
        if(blogResult){
            blogResult.then(blogData=>{

                if(needSetCookie){
                    res.setHeader('Set-Cookie',`userid=${userId};path=/;httpOnly;expires=${getCookieExpire()}`)
                }
                    res.end(JSON.stringify(blogData))
                    
            })
            return
        }
        
        // const blogData = handleBlogRouter(req,res)
       
        const userData = handleUserRouter(req,res)
        if(userData){
            
            userData.then(userData=>{
                if(needSetCookie){
                    res.setHeader('Set-Cookie',`userid=${userId};path=/;httpOnly;expires=${getCookieExpire()}`)
                }
                res.end(JSON.stringify(userData))
            })
            return
        }
        res.writeHead(404,{"Content-type":"text/plain"})
        res.write("404 Not Found\n")
        res.end()
        
         
     })
    //处理blog路由
  
    }


module.exports =serverHandle