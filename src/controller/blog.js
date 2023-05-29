const {exec} = require('../db/mysql')

const getList  =(author,keyword)=>{
      let sql=`select * from blogs where 1=1 `;
      if(author){
        sql += `and author='${author}' `
      }
      if(keyword){
        sql += `and title like '${keyword}' `
      }
      sql += `order by createtime desc`
      //返回promise
      return  exec(sql)
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