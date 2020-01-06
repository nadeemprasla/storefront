require("dotenv").config();
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWTSECRET;

function auth(req, res, next) {
    const token = req.header('x-auth-token');
    if(!token) res.status(401).json ({msg:"No Token, authorization denied"})
    try {
        const decoded = jwt.verify(token, jwtSecret);
        req.user = decoded;
        next()
    }
    catch(e) {
        res.status(400).json({msg:"Token is not valid"})
    }
}

module.exports = auth;