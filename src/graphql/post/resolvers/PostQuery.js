import Handlers from '../handlers';
const handlers = new Handlers();
import AuthUser from '../../../helpers/AuthUser'
import {ValidateGetListPostByUserId} from './../PostValidates'
const resolvers = {
  Query: {
    getListPostPublic: async () => {
      try {
        const listPostPublic = await handlers.getListPostPublic();
        return listPostPublic;
      } catch (error) {
        return Promise.reject(error);
      }
    },
    getListPostPrivate: async () => {
      try {
        const listPostPrivate = await handlers.getListPostPrivate();
        return listPostPrivate;
      } catch (error) {
        return Promise.reject(error);
      }
    },
    getListPost: async () => {
      try {
        const listPost = await handlers.getListPost();
        return listPost;
      } catch (error) {
        return Promise.reject(error);
      }
    },
    getListPostByUserId:AuthUser(ValidateGetListPostByUserId(async(_,data)=>{
      try {
        const {userId} = data
        const list = handlers.getListPostByUserId(userId)
        return list
      } catch (error) {
        return Promise.reject(error)
      }
    }) )
  },
};

export default resolvers;
