

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




        console.log(email, password)
        res.send('Hello Register in Controller')
    }catch(err){
        //error
        console.log(err)
        res.status(500).json({ message: "Server Errors" })
    }
  
}

exports.login = async(req,res)=>{
    try{
        //code
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

