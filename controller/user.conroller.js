import User from "../model/user.model.js";

const userSignUp = (req, res) => {
    const { email } = req.body;

    if (User.checkExisting(email)) {
        return res.status(400).json({ status: false, message: "User already exists" });
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

export { userSignUp };
