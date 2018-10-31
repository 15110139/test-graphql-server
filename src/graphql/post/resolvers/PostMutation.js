import Handlers from '../handlers';
import {
  ValidateNewPost,
  ValidatePublicPost,
  ValidateUpdatePost,
  ValidateDeletePost
} from '../PostValidates';
import {
  POST_ADDED
} from './envent'

import AuthUser from '../../../helpers/AuthUser'
import { PubSub } from 'graphql-subscriptions';
import AuthAdmin from '../../../helpers/AuthAdmin'

const pubsub = new PubSub();

const handlers = new Handlers();

const resolvers = {
  Mutation: {
    createNewPost: AuthUser(ValidateNewPost(async (_, post) => {
      try {
        const {
          title,
          content,
          createBy,
        } = post.post;

        const newPost = await handlers.createNewPost(title,
          content,
          createBy);
        if(newPost){
          pubsub.publish(POST_ADDED, { postAdded: newPost });
          return {
            _id: newPost._id,
            title: newPost.title,
            content: newPost.content,
            createBy: newPost.createBy,
            isPublic: newPost.isPublic,
          };
        }
        
        
      } catch (error) {
        return Promise.reject(error);
      }
    })),
    publicPost: AuthAdmin(ValidatePublicPost(async (_, post) => {
      try {
        console.log(post)
        const result = await handlers.publicPost(post.postId);
        console.log(result)
        return {
          success: "ok"
        }
      } catch (error) {
        return Promise.reject(error);
      }
    }), ),
    updatePost: AuthUser(ValidateUpdatePost(async (_, post) => {
      try {
        const {
          postId,
          title,
          content,
        } = post.post;

        const resultUpdatePost = await handlers.updatePost(postId, title, content);
        if (resultUpdatePost.n === resultUpdatePost.ok) {
          return {
            success: "OK"
          }
        }
        throw "thất bại"
      } catch (error) {
        return Promise.reject(error);
      }
    })),
    deletePost: AuthUser(ValidateDeletePost(async (_, post) => {
      try {
        console.log(post)
        const {
          postId
        } = post;

        const resultDeletePost = await handlers.deletePost(postId);
        console.log(resultDeletePost)
        if (resultDeletePost.n === resultDeletePost.ok) {
          return {
            success: "OK"
          }
        }
        throw "thất bại"
      } catch (error) {
        return Promise.reject(error);
      }
    })),

  },
};

export default resolvers;