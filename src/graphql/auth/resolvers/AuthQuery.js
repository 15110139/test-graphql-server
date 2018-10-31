import {
  ValidateGetInForUser,
} from '../AuthValidates';
import {
  JWT_SECRET,
} from '../../../config/Server';
import Handlers from '../handlers'
const handlers = new Handlers()
const jwt = require('jsonwebtoken');

const resolvers = {
  Query: {
    getInforUser: ValidateGetInForUser(async (_, data) => {
      try {
        const token = data.userId
        const getUserId = new Promise((resolve, reject) => jwt.verify(token, JWT_SECRET, (err, decoded) => {
          if (err) reject('invalid token');
          resolve(decoded);
        }));
        const resutl = await getUserId
        const userId = resutl._id
        const User = await handlers.getUserById(userId)
        if(!User) throw "invalid token"
        return {
          _id:User._id,
          name:User.name,
          email:User.email,
          isAdmin:User.isAdmin
        };
      } catch (error) {
        return Promise.reject(error);
      }
    }),
  },
};
export default resolvers;