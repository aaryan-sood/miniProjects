const express=require('express')
const path=require('path')
app=express()
let port=8080
app.set('view engine','ejs')

const redditData=require('./data.json')

app.set('views',path.join(__dirname,'/views'))
app.listen(port,() => {
    console.log(`listening on port : ${port}`)
})
app.get('/r/:subreddit',(req,res) => {
    let {subreddit}=req.params;
    let data=redditData[subreddit]
    if(data){
        res.render('subreddit.ejs',{data})
        console.log(data)
    }
    else{
        res.render('notfound.ejs',{subreddit})
    }
    
})