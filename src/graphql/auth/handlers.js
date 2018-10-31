import UserModel from '../../model/User';

class Handlers {
  async register(email, password, name) {
    const user = await UserModel.create({
      email,
      password,
      name,
    });
    return user;
  }

  async getUserByEmail(email) {
    console.log(email);
    const user = await UserModel.findOne({
      email,
    });
    return user;
  }


  async getUserById(userId) {
    const user = await UserModel.findOne({
      _id: userId
    });
    return user;
  }
}

export default Handlers;