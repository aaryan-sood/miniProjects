const express=require('express')
const path=require('path')
const {v4 : uuid} = require('uuid')
let port=8080

let app=express()
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'/views'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

let comments = [
    {
        id:uuid(),
        username: 'Todd',
        comment: 'lol that is so funny!'
    },
    {
        id:uuid(),
        username: 'Skyler',
        comment: 'I like to go birdwatching with my dog'
    },
    {
        id:uuid(),
        username: 'Sk8erBoi',
        comment: 'Plz delete your account, Todd'
    },
    {
        id:uuid(),
        username: 'onlysayswoof',
        comment: 'woof woof woof'
    }
]

app.get('/comments',(req,res) => {
    res.render('comments/index.ejs',{comments})
})

app.get('/comments/new',(req,res) => {
    res.render('comments/new.ejs')
})

app.post('/comments',(req,res) => {
    const {username,comment}=req.body
    comments.push({username,comment,id:uuid()})
    res.redirect('/comments')
})

app.get('/comments/:id',(req,res) => {
    let {id} = req.params
    const comment=comments.find((object) => {   
        return object.id === id
    })
    res.render('comments/show.ejs',{comment})

})

app.patch('/comments/:id',(req,res) => {
    let {id}=req.params
    console.log(id)
    let {comment}=req.body
    let foundComment=comments.find((obj) => {
        return obj.id === id;
    })
    foundComment.comment=comment;
    res.redirect('/comments')
})

app.listen(port,() => {
    console.log(`listening on port ${port}`)
})