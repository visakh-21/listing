const mongoose=require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/pms')
const Subproduct=mongoose.model('Subproduct',{

    id:String,
    itemname:String,
    item_price:Number
})

module.exports={
    Subproduct

}