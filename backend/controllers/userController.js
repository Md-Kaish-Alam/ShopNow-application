const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const User = require('../models/userModel');


const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: "1d",
    })
}

// register the user
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    // validattion

    if (!name || !email || !password) {
        res.status(400)
        throw new Error("Please fill the all required fields.")
    }

    if (password.length < 6) {
        res.status(400)
        throw new Error("Password must be at least 6 characters.")
    }

    // check if the user already exists
    const userExists = await User.findOne({ email })

    if (userExists) {
        res.status(400)
        throw new Error("Email already registered.")
    }

    // create a new user
    const newUser = await User.create({ name, email, password })

    // generate token
    const token = generateToken(newUser._id)

    if (newUser) {
        const { _id, name, email, role } = newUser
        res.cookie("token", token, {
            path: "/",
            httpOnly: true,
            expires: new Date(Date.now() + 1000 * 86400),
            // secure: true,
            // sameSite: none,
        })

        // send user data
        res.status(201).json({ _id, name, email, role, token })
    } else {
        res.status(400);
        throw new Error("Invalid user data.")
    }
});

// login user
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;


    // validate request

    if (!email || !password) {
        res.status(400)
        throw new Error("Please enter email and password");
    }

    // check if user exists
    const user = await User.findOne({ email });

    if (!user) {
        res.status(400)
        throw new Error("User does not exist");
    }

    // user exists, check if password is correct
    const passwordIsCorrect = await bcrypt.compare(password, user.password);

    // generate token
    const token = generateToken(user._id)

    if (user && passwordIsCorrect) {
        const loginUser = await User.findOne({ email }).select("-password");
        res.cookie("token", token, {
            path: "/",
            httpOnly: true,
            expires: new Date(Date.now() + 1000 * 86400),
            // secure: true,
            // sameSite: none,
        })
        // send user data
        res.status(201).json(loginUser)
    } else {
        res.status(400)
        throw new Error("Invalid credentials!")
    }
});


// logged out user
const logoutUser = asyncHandler(async (req, res) => {
    res.cookie("token", "", {
        path: "/",
        httpOnly: true,
        expires: new Date(0),
        // secure: true,
        // sameSite: none,
    });

    res.status(200).json(({ message: "User logged in successfully!" }))
});


// get user data
const getUser = asyncHandler(async (req, res) => {
    const user = await User.findById(res.user._id).select("-password");

    if (user) {
        res.status(200).json(user)
    } else {
        res.status(400);
        throw new Error("User not found");
    }
});

// get login status
const getLoginStatus = asyncHandler(async (req, res) => {

    const token = req.cookies.token;
    if (!token) {
        return res.json(false);
    }

    // verify the token
    const verified = jwt.verify(token, process.env.JWT_SECRET);

    if (!verified) {
        return res.json(false);
    } else {
       return res.json(true);
    }


});

// update user data
const updateUser = asyncHandler(async (req, res) => {
    
});


module.exports = {
    registerUser,
    loginUser,
    logoutUser,
    getUser,
    getLoginStatus,
    updateUser
}