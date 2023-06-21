export const formValidator = (values) => {
  const errors = {};
  if (!values.userId) {
    errors.userId = "UserId is Required";
  } else if (values.userId.length < 5) {
    errors.userId = "UserId should be of min 5 characters";
  }
  if (!values.password) {
    errors.password = "Password is Required";
  } else if (values.password.length < 5) {
    errors.password = "Password should be of min 5 characters";
  }
  return errors;
};
