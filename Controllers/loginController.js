const { checkLogin } = require("../Services/user");

/**
 * Controller function for user login.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {void}
 */
const login = async (req, res) => {
    try{
        // Extract email and password from the request body
        const { email, password } = req.body;
        // Check the login credentials
        const user = checkLogin(email, password)
        // Send appropriate responses based on the result
        if(user){
            res.status(200).json(user);
        }else{
            res.status(401).json({message: "Invalid credentials"});
        }
    }catch(e){
        // Log and handle errors, then send a 500 Internal Server Error response
        console.log(e);
        res.status(500).json({message: "Internal server error"});
    }
}
module.exports = {
    login
}