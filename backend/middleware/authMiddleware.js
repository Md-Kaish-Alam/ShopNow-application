const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');


const protect = asyncHandler(async (req, res, next) => {
    try {

        const token = req.cookies.token
        if (!token) {
            res.status(401);
            throw new Error("Not authorised, please login first.");
        }

        // verify the token
        const verified = jwt.verify(token, process.env.JWT_SECRET);

        // get the user id from the token
        const user = await User.findById(verified.id).select("-password");
        
        if (!user) {
            res.status(401);
            throw new Error("User not found");
        }

        res.user = user;
        // console.log(res.user);

        next();

    } catch (error) {
        res.status(401);
        throw new Error("Not authorised, please login first.");
    }
});

module.exports = {
    protect
}