const fs=require('fs')
// console.log(fs)
// fs.mkdir('dogs',{recursive : true},(err) => {
//     console.log("In the callback!!")
//     if (err) throw err
// })
let name=process.argv[2] || 'Project'
try{
    fs.mkdirSync(`${name}`)
    fs.writeFileSync(`${name}/index.html`,"")
    fs.writeFileSync(`${name}/app.js`,"")
    fs.writeFileSync(`${name}/style.css`,"")
    console.log("Hi, i come after mkdir in the file")
}catch(e){
    console.log('Something went wrong!!')
    console.log(e)
}

// import { mkdir } from 'node:fs';

// // Create ./tmp/a/apple, regardless of whether ./tmp and ./tmp/a exist.
// mkdir('./tmp/a/apple', { recursive: true }, (err) => {
//   if (err) throw err;
// });