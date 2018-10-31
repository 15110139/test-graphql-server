import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  name: {
    type: String,
  },
});

const UserModel = mongoose.model('User', UserSchema);
export default UserModel;
