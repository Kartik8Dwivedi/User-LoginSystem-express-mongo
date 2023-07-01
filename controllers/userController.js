import User from "../model/user.schema.js";

const home = (req,res) => {
    res.send("<h1>Welcome to User Management System</h1>")
}

const register = async (req,res) => {
    try {
        console.log(req.body)
        const { username, email, password} = req.body

        // Checking all the details are provided or not
        if(!username || !email || !password) throw new Error('Username, email and password are required')

        // Checking if user is already registered
        const userExists = await User.findOne({email})
        if(userExists) throw new Error('User already exixts')

        // Now adding the user to the database
        const user = await User.create({
            username,
            email,
            password
        })
        res.status(200).json({
            success : true,
            message: "User registered successfully"
        })

    } catch (error) {
        console.log("Error in registeration: "+error)
        res.status(400).json({
            success: false,
            message: "Failed to register"
        })
    }
}

const login = async (req,res) => {
    try {
        const username = req.params.username
        const password = req.params.password
        const user = await User.findOne({
            "username" : username,
            "password" : password
        })
        res.status(200).json({
            Success : true,
            Message : `User login succcessfully.`,
        })
    } catch (error) {
        console.log("Error in login: "+error)
        res.send(400).json({
            success : false,
            message : "Unable to login"
        })
    }

}

export {home,register,login}