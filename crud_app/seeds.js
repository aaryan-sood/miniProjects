// in here we created a seeds file to seed some data into our database and it is pretty common to seed some data into our database for development purposes and to seperate it from index file 
const mongoose=require('mongoose')
const Product=require('./models/products')

mongoose.connect('mongodb://127.0.0.1:27017/farmStand')
.then(() => console.log('mongoose connection open'))
.catch(() => console.log('mongoose connection error'))

// let p=new Product({
//     name : 'Ruby GrapeFruit',
//     price : 1.99,
//     category : 'Fruit'
// })

// p.save()
// .then(data => console.log(data))
// .catch(err => console.log(err))

const seedProducts = [
    {
        name: 'Fairy Eggplant',
        price: 1.00,
        category: 'vegetable'
    },
    {
        name: 'Organic Goddess Melon',
        price: 4.99,
        category: 'fruit'
    },
    {
        name: 'Organic Mini Seedless Watermelon',
        price: 3.99,
        category: 'fruit'
    },
    {
        name: 'Organic Celery',
        price: 1.50,
        category: 'vegetable'
    },
    {
        name: 'Chocolate Whole Milk',
        price: 2.69,
        category: 'dairy'
    },
]
Product.insertMany(seedProducts)
.then(data => console.log(`Products inserted`,data))
.catch(err => console.log('error !!',err))
