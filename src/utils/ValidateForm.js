export const ValidateForm = (values) => {
  const errors = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  if (!values.firstName) {
    errors.firstName = "Name is required!";
  }
  if (!values.lastName) {
    errors.lastName = "Last Name is required!";
  }
  if (!values.email) {
    errors.email = "Email is required!";
  } else if (!regex.test(values.email)) {
    errors.email = "this is not a valid email format";
  }
  if (!values.inputPassword) {
    errors.inputPassword = "Password is required!";
  } else if (values.inputPassword.length < 4) {
    errors.inputPassword = "Password must be more than 4 characters";
  } else if (values.inputPassword.length > 10) {
    errors.inputPassword = "Password cannot exceed more than 4 characters";
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = "Password is required!";
  } else if (values.confirmPassword.length < 4) {
    errors.confirmPassword = "Password must be more than 4 characters";
  } else if (values.confirmPassword.length > 10) {
    errors.confirmPassword = "Password cannot exceed more than 4 characters";
  } else if (values.confirmPassword !== values.inputPassword) {
    console.log("v1", values.confirmPassword, "v2", values.inputPassword);
    errors.confirmPassword = "Both passwords must be equal";
  }
  return errors;
};
