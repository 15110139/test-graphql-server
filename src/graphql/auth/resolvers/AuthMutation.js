// errors
import jwt from 'jsonwebtoken';
import {
  RegisterValidate,
  LoginValidate,
} from '../AuthValidates';
import Handlers from '../handlers';
import {
  JWT_OPTIONS,
  JWT_SECRET,
} from '../../../config/Server';

const handlers = new Handlers();

const resolvers = {
  Mutation: {
    login: LoginValidate(async (_, user) => {
      try {
        const {
          email,
          password,
        } = user.user;
        const result = await handlers.getUserByEmail(email);
        if (!result) throw 'user khong toan tai'
        if (!result.password === password) throw new Error('sai mat khau');
        const token = jwt.sign({
            _id: result._id,
          },
          JWT_SECRET, {
            expiresIn: JWT_OPTIONS.expiresIn,
          });

        return {
          jwt: token,
          email: result.email,
          name: result.name,
          isAdmin: result.isAdmin,
          _id: result._id,
        };
      } catch (error) {
        return Promise.reject(error);
      }
    }),
    register: RegisterValidate(async (_,
      user
    ) => {
      try {
        const {
          email,
          password,
          name,
        } = user.user;

        const newUser = await handlers.register(email, password, name);
        const token = jwt.sign({
            _id: newUser._id,
          },
          JWT_SECRET, {
            expiresIn: JWT_OPTIONS.expiresIn,
          });

        return {
          jwt: token,
          email: newUser.email,
          name: newUser.name,
          isAdmin: newUser.isAdmin,
          _id: newUser._id,
        };
      } catch (error) {
        return Promise.reject(error);
      }
    }),
  },
};

export default resolvers;