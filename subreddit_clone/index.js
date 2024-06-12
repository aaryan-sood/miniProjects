const express=require('express')
const path=require('path')
let port=8080
app.set('views',path.join(__dirname,'/views'))
app=express()
app.listen(port,() => {
    console.log(`listening on port : ${port}`)
})
app.set('view engine','ejs')