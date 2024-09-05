import User from "../model/user.model.js";

const userSignUp = (req, res) => {
    const { email } = req.body;

    if (User.checkExisting(email)) {
        return res.status(400).json({ 
            status: false, 
            message: "User already exists" 
        });
    }

    User.userSignUp(req.body)
        .then(() => {
            res.status(201).json({
                status: true,
                message: 'User signed up successfully',
            });
        })
        .catch(error => {
            res.status(400).json({
                status: false,
                message: error.message || 'Signup failed',
            });
        });
};


const userLogin = (req, res) => {

    User.userLogin(req.body)
        .then((user) => {
            if (!user) {
                return res.status(400).json({ 
                    status: false, 
                    message: "Invalid Email or Password!" 
                });  
            }
            res.status(200).json({
                status: true,
                message: 'User Login successfully',
            });
        })
        .catch(error => {
            res.status(400).json({
                status: false,
                message: error.message || 'Login failed',
            });
        });
};

export { userSignUp, userLogin };
