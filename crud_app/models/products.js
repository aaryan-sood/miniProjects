// Products.js is to make models and to export them to then use in either index.js or seeds.js as in a real  web app there are certainly more than one model to work with so keep our our index.js clutter free models are generally created in products.js and then can be exported
const mongoose=require('mongoose')
const productSchema=new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    price : {
        type : String,
        required : true,
        min : 0
    },
    category : {
        type : [String],
        lowercase : true,
        enum : ['fruit','vegetable','diary']
    }
})
const Product=mongoose.model('Product',productSchema)
module.exports=Product