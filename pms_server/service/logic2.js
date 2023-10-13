const dbsub=require('./dbsub')


const allSubProducts=()=>{
   return dbsub.Subproduct.find().then(result=>{
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
    const addSubProduct=(id,itemname,item_price)=>{
      return  dbsub.Subproduct.findOne({id}).then(result=>{
            if(result){
                return{
                    statusCode:404,
                    message:"already exist"
                }
            }
            else{
                const newsub=dbsub.Subproduct({
                    id,
                    itemname,
                    item_price


                })
                newsub.save()
                return{
                    statusCode:200,
                    message:"added successfully"
                }
            }

        })
    }
    module.exports={
        allSubProducts,addSubProduct
}
