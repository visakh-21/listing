const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/pms')
const Product=mongoose.model('Product',{ 
id:String,
category_name:String
})

module.exports={
    Product
}