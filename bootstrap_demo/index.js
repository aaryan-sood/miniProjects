const express=require('express')
const path=require('path')
let app=express()
let port=8080
const redditData=require('./data.json')

app.use(express.static(path.join(__dirname,'public')))

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'/views'))

app.listen(port,() => {
    console.log(`listening on port : ${port}`)
})
app.get('/rand',(req,res) => {
    let random=Math.floor(Math.random() * 10) + 1
    res.render('random.ejs',{random})
})
app.get('/',(req,res) => {
    res.render('home.ejs')
})
app.get('/r/:subreddit',(req,res) => {
    let {subreddit}=req.params;
    let data=redditData[subreddit]
    if(data){
        res.render('subreddit.ejs',{data})
    }
    else{
        res.render('notfound.ejs',{subreddit})
    }
    
})