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

export const signUpValidator = (values) => {
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
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.name) {
    errors.name = "name is Required";
  } else if (values.name.length < 5) {
    errors.name = "Name should be of min 5 characters";
  }
  return errors;
};
