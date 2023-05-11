const login =(username,password)=>{
    if(username === 'zhang'  && password === '123'){
        return  true
    }else{
        return false
    }
}

module.exports = {
    login
}