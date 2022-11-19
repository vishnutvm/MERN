
const jwt = require('jsonwebtoken')



export const verifyLogin = (req, res, next) => {
    console.log("evida ayi 1");
    const token = req.headers['x-access-token']
    const verified = jwt.verify(token, 'SKey5flwx')
    console.log(verified);
    if (verified) {
        console.log("evida ayi");
        next()


    } else {
        // Access Denied
        return res.status(401).send(error);
    }
}
