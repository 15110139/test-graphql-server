import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  content: {
    type: String,
  },
  createBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  isPublic: {
    type: Boolean,
    default: false,
  },
});

const PostModel = mongoose.model('Post', PostSchema);
export default PostModel;
