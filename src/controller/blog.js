const getList  =(author,keyword)=>{
        return [
            {
            id:"1",
            author:'张三',
            title:'标题A',
            content:"呃逆荣",
            createTime:'2021-12-20 10:00:00'
        },
            {
            id:"2",
            author:'李四',
            title:'标题B',
            content:"呃逆荣",
            createTime:'2021-12-20 10:00:00'
        },
    ]
}

const getDetail = ()=>{
    //
    return {
        id:1,
        title:'标题A',
        content:'内容A',
        createTime:154661049112,
        author:'张三'
    }
    }

const newBlog =((blogData={})=>{
    console.log(blogData,'bewssssss');
     //blogdata博客对象
     return {
        id:3,

     }
})

const upadateBlog =((id,blogData={})=>{

     //blogdata博客对象
     return true
})

const delBlog =((id)=>{
 
     //blogdata博客对象
     return true
})
module.exports = {
    getList,
    getDetail,
    newBlog,
    upadateBlog,
    delBlog
}