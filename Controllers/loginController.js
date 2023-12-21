const { checkLogin } = require("../Services/user");

const login = async (req, res) => {
    try{

        const { email, password } = req.body;
        const user = checkLogin(email, password)
        if(user){
            res.status(200).json(user);
        }else{
            res.status(401).json({message: "Invalid credentials"});
        }
    }catch(e){
        console.log(e);
        res.status(500).json({message: "Internal server error"});
    }
}
module.exports = {
    login
}