import {
    JWT_SECRET
} from "../config/Server";
import Handlers from '../graphql/auth/handlers'
const jwt = require('jsonwebtoken');
const handlers = new Handlers()

const AuthAdmin = next => async (_, args, ctx, info) => {
    try {
        const token = ctx.accessToken;
        if (!token) throw "REQUIRE_TOKEN"
        const getUserId = new Promise((resolve, reject) => jwt.verify(token, JWT_SECRET, (err, decoded) => {
            if (err) reject('invalid token');
            resolve(decoded);
        }));
        const resutl = await getUserId
        const userId = resutl._id
        const User = await handlers.getUserById(userId)
        if (!User) throw "invalid token"
        if(!User.isAdmin) throw "not permission"
        return next(_, args, ctx, info);
    } catch (error) {
        console.log('user error', error);
        return Promise.reject(error);
    }
};

export default AuthAdmin;   