const prisma = require('../config/prisma')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.register = async(req,res)=>{
    //code
    try{
        //code
        const { email, password } = req.body

        //validate body
        if(!email){
            return res.status(400).json({ message: 'Email is required!!!'})
        }
        if(!password){
            return res.status(400).json({ message: 'Password is required!!!'})
        }

        //check email in Database
        const user = await prisma.user.findFirst({
            where:{
                email: email //ตัวหน้าคือ field ใน DB เรา,ตัวหลังคือที่ประกาศไว้ข้างบน
            }
        })
        if(user){
            return res.status(400).json({ message: "Email already exist!!!"})
        }
        //step 3 hashpassword
        const hashPassword = await bcrypt.hash(password, 10)
        console.log(hashPassword)

        //step 4 register
        await prisma.user.create({
            data:{
                email: email,
                password: hashPassword
            }
        })


        
        res.send('Register Success')
    }catch(err){
        //error
        console.log(err)
        res.status(500).json({ message: "Server Errors" })
    }
  
}

exports.login = async(req,res)=>{
    try{
        //code
        const { email, password } = req.body

        //step 1 check email ก่อนว่าที่ส่งมาถูกมั้ย ได้เปิดการใช้งานมั้ย
        const user =await prisma.user.findFirst({
            where:{
                email: email
            }
        })
        if(!user || !user.enabled){
            return res.status(400).json({ message: 'User Not Found or Not Enabled' })
        }
        //step 2 check password
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch){
            return res.status(400).json({ message: 'Password Invalid!!!'})
        }
        //step 3 chech payload
        //step 4 generate token

        console.log(email, password)
        res.send("Hello Login in Controller")
    }catch(err){
        //error
        console.log(err)
        res.status(500).json({ message: "Server Errors"})
    }
    
}

exports.currentUser = async(req,res) =>{
    try{
        //code
        res.send("Hello Current User")
    }catch(err){
        //error
        console.log(err)
        res.status(500).json({ message: "Server Errors"})
    }
}

