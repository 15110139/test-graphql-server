export const ValidateNewPost = next => (_, args, ctx, info) => {
  try {
    // check check
    // check emailOrPhoneNumber is email or phoneNumber
    // if (validator.isEmail(emailOrPhoneNumber)) {
    //   args.user.email = emailOrPhoneNumber;
    //   args.user.phoneNumber = null;
    // } else if (validator.isMobilePhone(emailOrPhoneNumber, phoneLocation)) {
    //   if (!fcmToken) throw ErrorCodes.NOT_TRUE_FCM_TOKEN;
    //   args.user.phoneNumber = emailOrPhoneNumber;
    //   args.user.email = null;
    // } else throw ErrorCodes.NOT_PHONE_OR_EMAIL;
    // // Validate data input
    // if (!validator.isLength(password, { min: 6, max: 30 })) {
    //   throw ErrorCodes.IN_VALID_PASSWORD;
    // }
    return next(_, args, ctx, info);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const ValidatePublicPost = next => (_, args, ctx, info) => {
  try {
    // check check
    // check emailOrPhoneNumber is email or phoneNumber
    // if (validator.isEmail(emailOrPhoneNumber)) {
    //   args.user.email = emailOrPhoneNumber;
    //   args.user.phoneNumber = null;
    // } else if (validator.isMobilePhone(emailOrPhoneNumber, phoneLocation)) {
    //   if (!fcmToken) throw ErrorCodes.NOT_TRUE_FCM_TOKEN;
    //   args.user.phoneNumber = emailOrPhoneNumber;
    //   args.user.email = null;
    // } else throw ErrorCodes.NOT_PHONE_OR_EMAIL;
    // // Validate data input
    // if (!validator.isLength(password, { min: 6, max: 30 })) {
    //   throw ErrorCodes.IN_VALID_PASSWORD;
    // }

    return next(_, args, ctx, info);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const ValidateUpdatePost = next => (_, args, ctx, info) => {
  try {
    // check check
    // check emailOrPhoneNumber is email or phoneNumber
    // if (validator.isEmail(emailOrPhoneNumber)) {
    //   args.user.email = emailOrPhoneNumber;
    //   args.user.phoneNumber = null;
    // } else if (validator.isMobilePhone(emailOrPhoneNumber, phoneLocation)) {
    //   if (!fcmToken) throw ErrorCodes.NOT_TRUE_FCM_TOKEN;
    //   args.user.phoneNumber = emailOrPhoneNumber;
    //   args.user.email = null;
    // } else throw ErrorCodes.NOT_PHONE_OR_EMAIL;
    // // Validate data input
    // if (!validator.isLength(password, { min: 6, max: 30 })) {
    //   throw ErrorCodes.IN_VALID_PASSWORD;
    // }

    return next(_, args, ctx, info);
  } catch (error) {
    return Promise.reject(error);
  }
};


export const ValidateDeletePost = next => (_, args, ctx, info) => {
  try {
    // check check
    // check emailOrPhoneNumber is email or phoneNumber
    // if (validator.isEmail(emailOrPhoneNumber)) {
    //   args.user.email = emailOrPhoneNumber;
    //   args.user.phoneNumber = null;
    // } else if (validator.isMobilePhone(emailOrPhoneNumber, phoneLocation)) {
    //   if (!fcmToken) throw ErrorCodes.NOT_TRUE_FCM_TOKEN;
    //   args.user.phoneNumber = emailOrPhoneNumber;
    //   args.user.email = null;
    // } else throw ErrorCodes.NOT_PHONE_OR_EMAIL;
    // // Validate data input
    // if (!validator.isLength(password, { min: 6, max: 30 })) {
    //   throw ErrorCodes.IN_VALID_PASSWORD;
    // }

    return next(_, args, ctx, info);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const ValidateGetListPostByUserId = next => (_, args, ctx, info) => {
  try {
    // check check
    // check emailOrPhoneNumber is email or phoneNumber
    // if (validator.isEmail(emailOrPhoneNumber)) {
    //   args.user.email = emailOrPhoneNumber;
    //   args.user.phoneNumber = null;
    // } else if (validator.isMobilePhone(emailOrPhoneNumber, phoneLocation)) {
    //   if (!fcmToken) throw ErrorCodes.NOT_TRUE_FCM_TOKEN;
    //   args.user.phoneNumber = emailOrPhoneNumber;
    //   args.user.email = null;
    // } else throw ErrorCodes.NOT_PHONE_OR_EMAIL;
    // // Validate data input
    // if (!validator.isLength(password, { min: 6, max: 30 })) {
    //   throw ErrorCodes.IN_VALID_PASSWORD;
    // }

    return next(_, args, ctx, info);
  } catch (error) {
    return Promise.reject(error);
  }
};





