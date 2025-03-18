const prisma = require("../config/prisma")

exports.create = async(req,res)=>{
    try{
        //code
        const { title,description,price,quantity,categoryId,images } = req.body
        // console.log(title,description,price,quantity,images )
        const product = await prisma.product.create({
            data:{
                title: title,
                description: description,
                price: parseFloat(price),
                quantity: parseInt(quantity),
                categoryId: parseInt(categoryId),
                //เดี๋ยวมาจ้าาา
                images: {//loop สร้างไปเรื่อยๆ
                    create: images.map((item) => ({
                        asset_id: item.asset_id,
                        public_id: item.public_id,
                        url: item.url,
                        secure_url: item.secure_url
                    }))
                }
            }
        })
        res.send(product)
    }catch(err){
        //error
        console.log(err)
        res.status(500).json({ message: "Server Error" })
    }
}

exports.list = async(req,res)=>{
    try{
        //code
        const { count } = req.params
        const products = await prisma.product.findMany({
            take: parseInt(count),
            orderBy: { createdAt : "desc" },
            include:{ //ฟิลแบบการ join ตาราง
                category: true,
                images: true
            }
        })
        res.send(products)
    }catch(err){
        //error
        console.log(err)
        res.status(500).json({ message: "Server Error" })
    }
}

exports.update = async(req,res)=>{
    try{
        //code
        
        res.send("Hello Update Product")
    }catch(err){
        //error
        console.log(err)
        res.status(500).json({ message: "Server Error" })
    }
}

exports.remove = async(req,res)=>{
    try{
        //code
        
        res.send("Hello Remove Product")
    }catch(err){
        //error
        console.log(err)
        res.status(500).json({ message: "Server Error" })
    }
}

exports.listby = async(req,res)=>{
    try{
        //code
        
        res.send("Hello Listby Product")
    }catch(err){
        //error
        console.log(err)
        res.status(500).json({ message: "Server Error" })
    }
}

exports.searchFilters = async(req,res)=>{
    try{
        //code
        
        res.send("Hello searchFilters Product")
    }catch(err){
        //error
        console.log(err)
        res.status(500).json({ message: "Server Error" })
    }
}