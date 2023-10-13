const db=require('./db')

const allProducts=()=>{

 return db.Product.find().then(result=>{
        if(result){
            return{
                statusCode:200,
                products:result
            }
        }
        else{
            return{
                statusCode:404,
                message:"no data"
            }
        }
    })
}
    
  const addProduct=(id,category_name)=>{
  return  db.Product.findOne({id}).then(result=>{
        if(result){
            return{
                statusCode:404,
                message:"already exist"
            }
        }
        else{
            const newPrdt=new db.Product({
                id,
                category_name
            

            })
            newPrdt.save()  
            return{
                statusCode:200,
                message:"added successfully"
            }
        }

    })

  }
  
    
    module.exports={
        allProducts,addProduct
}