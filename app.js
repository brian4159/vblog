
const handleBlogRouter = require('./src/router/blog')
const handleUserRouter = require('./src/router/user')
const querystring = require('querystring');

// const  getPostData = (req)=>{
//       if (req.methods !== 'POST') {
//           return  resolve({})
//       }
//       if(req.header['content-type'] !== 'application/json')
//       {
//         return  resolve({})
//       }
//       let   postData = {}

// }

const getPostData = (req)=>{
    const promise  = new    Promise((resolve,reject) => {
        if (req.method !== 'POST') {
            resolve({})
            return  
        }
        if(req.headers['content-type'] != 'application/json')
        {
            resolve({})
            return  
        }
        let  postData = ''
        req.on('data',chunk => {
            postData  += chunk.toString();
        })
        req.on('end',()=>{
            if(!postData){
                resolve({})
                return  
            }
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


     getPostData(req).then(postData=>{
        req.body = postData;
        const blogResult = handleBlogRouter(req,res);
        if(blogResult){
            blogResult.then(blogData=>{
                    res.end(JSON.stringify(blogData))
                    
            })
            return
        }
        
        // const blogData = handleBlogRouter(req,res)
       
        const userData = handleUserRouter(req,res)
        if(userData){
            res.end(JSON.stringify(userData))
            return
        }
        res.writeHead(404,{"Content-type":"text/plain"})
        res.write("404 Not Foundaa\n")
        res.end()
        
         
     })
    //处理blog路由
  
    }


module.exports =serverHandle