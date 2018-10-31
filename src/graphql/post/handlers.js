import PostModel from '../../model/Post';

class Handlers {
  async createNewPost(title, content, createBy) {
    const newPost = await PostModel.create({
      title,
      content,
      createBy,
    });
    return newPost;
  }

  async getListPostPublic() {
    const listPostPublic = await PostModel.find({
      isPublic: {
        $eq: true,
      },
    }).populate({
      path: 'createBy',
      select: 'name email _id',
    });
    return listPostPublic;
  }

  async getListPost() {
    const listPost = await PostModel.find({}).populate({
      path: 'createBy',
      select: 'name email _id',
    });
    console.log(listPost);
    return listPost;
  }

  async getListPostPrivate() {
    const listPrivatePost = await PostModel.find({
      isPublic: {
        $eq: false,
      },
    }).populate({
      path: 'createBy',
      select: 'name email _id',
    });
    return listPrivatePost;
  }

  async publicPost(postId) {
    const result = await PostModel.updateOne({
      _id: postId,
    }, {
      isPublic: true
    });
    return result;
  }

  async updatePost(postId, title, content) {
    const resultUpdatePost = await PostModel.updateOne({
      _id: postId
    }, {
      title,
      content
    })

    return resultUpdatePost
  }


  async deletePost(postId) {
    const resultDeletePost = await PostModel.deleteOne({
      _id: postId
    })

    return resultDeletePost
  }

  async getListPostByUserId(userId) {
    const listPrivatePost = await PostModel.find({
      createBy: userId
    }).populate({
      path: 'createBy',
      select: 'name email _id',
    });
    return listPrivatePost;
  }
}

export default Handlers;