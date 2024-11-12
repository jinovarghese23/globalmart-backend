const jwt = require('jsonwebtoken');

const jwtMiddleWare = (req, res, next) => {
    try {
        const token = req.headers['authorization'].split(' ')[1];
        console.log("token--");
        console.log(token);
        const jwtResponse = jwt.verify(token,process.env.JWTSECRET);
        console.log(jwtResponse);
        req.payload= jwtResponse.userId;
        next();
    }
    catch (error) {
        res.status(401).json('Authorization failed, Please login ...')
    }
}

module.exports  = jwtMiddleWare