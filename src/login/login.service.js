const bcrypt = require('bcrypt');
const { generateToken, verifyToken, extractToken } = require('../../authServer/authJWT');
const { getSecret } = require('../../authServer/authSecret');

const validateUser = async (login, user) => {
    try {
        return await bcrypt.compare(login.password, user.password);
    } catch (error) {
        console.error(`${error.name} : ${error.message}`);
    }
}

const encriptUser = async (user) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(user.password, salt);
        user = Object.assign(user, { password: hash });
        return user;
    } catch (error) {
        console.error(`${error.name} : ${error.message}`);
    }
}

const loginUser = (user) => {

    try {
        const secret = getSecret();
        if(secret.valid){
        return token = generateToken(user, secret.secret, { expiresIn: secret.expire });
        }
        else throw 'Secret is not valid';

    } catch (error) {
        console.error(`${error.name} : ${error.message}`);
    }
}

const authenticateUser = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader === undefined) {
        res.sendStatus(401);
    } else {
        const secret = getSecret();
        const token = extractToken(authHeader);
        const verify = verifyToken(token, secret);
        if (verify === 403) return res.sendStatus(403);
        req.user = verify;
        next();
    }
    return;
};

module.exports = { validateUser, loginUser, encriptUser, authenticateUser }