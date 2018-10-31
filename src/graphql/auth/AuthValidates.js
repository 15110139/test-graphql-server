

export const LoginValidate = next => (_, args, ctx, info) => {
  try {
    // check emailOrPhoneNumber is email or phoneNumber
    // if (!emailOrPhoneNumber || emailOrPhoneNumber === '') {
    //   throw ErrorCodes.EMAIL_AND_PHONE_IS_EMPTY;
    // }
    // if (validator.isEmail(emailOrPhoneNumber)) {
    //   args.user.email = emailOrPhoneNumber;
    //   args.user.phoneNumber = null;
    // } else if (validator.isMobilePhone(emailOrPhoneNumber, phoneLocation)) {
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

export const RegisterValidate = next => (_, args, ctx, info) => {
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


export const ValidateGetInForUser = next => (_, args, ctx, info) => {
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
