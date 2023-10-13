const express=require('express')
const server=express()
const cors=require('cors')
const logic=require('./service/logic')
const logic2=require('./service/logic2')
server.use(cors({origin:'http://localhost:3000'}))
server.use(express.json())
server.listen(8000,()=>{
    console.log("server start at 8000");
})

server.get('/getAllProduct',(req,res)=>{
    logic.allProducts().then(result=>{
        res.status(result.statusCode).json(result)
    })
})


server.get('/getSubProduct',(req,res)=>{
    logic2.allSubProducts().then(result=>{
        res.status(result.statusCode).json(result)
    })
})
server.post('/addProduct',(req,res)=>{
    logic.addProduct(req.body.id,req.body.category_name).then(result=>{
        res.status(result.statusCode).json(result)
    })
})
server.post('/addSubProduct',(req,res)=>{
    logic2.addSubProduct(req.body.id,req.body.itemname,req.body.item_price).then(result=>{
        res.status(result.statusCode).json(result)
    })
})
server.get('/getproduct/:id',(req,res)=>{
    logic2.getproduct(req.params.id).then(result=>{
        res.status(result.statusCode).json(result)
    })
})




