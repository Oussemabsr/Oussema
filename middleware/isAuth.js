const jwt = require ("jsonwebtoken");


const isAuth = async (req, res, next) => {
    try {
        const token = req.headers["authorization"];
        if (!token) {
            return res.status(401).send({erros : [{msg :"Not authorized"}]});
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        const foundUser = await User.findOne ({_id: decoded.id})
        if (!foundUser) {
            return res.status(401).send({erros : [{msg :"Not authorized"}]});
        }
        req.user = foundUser
        next()
    } catch (error) {
        return res.status(401).send({erros : [{msg :"Not authorized"}]});
    }
}



module.exports = isAuth;