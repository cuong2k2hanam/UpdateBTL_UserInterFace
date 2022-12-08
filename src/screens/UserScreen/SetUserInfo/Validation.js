const validationName = (firstName) => {
  if (firstName.length == 0) {
    return {
      validation: false,
      message: "Họ người dùng không được để trống.",
    };
  } else if (firstName.length > 20) {
    return {
      validation: false,
      message: "Họ người dùng chứa tối đa 20 ký tự.",
    };
  }
};
