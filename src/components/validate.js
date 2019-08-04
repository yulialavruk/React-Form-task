const getErrorsByValues = (values, step) => {
  const errors = {};
  switch (step) {
    case 0:
      if (values.firstname.length < 5) {
        errors.firstname = "Must be 5 characters or more";
      }
      if (values.lastname.length < 5) {
        errors.lastname = "Must be 5 characters or more";
      }
      if (values.password.length < 6) {
        errors.password = "Must be 6 characters or more";
      }
      if (values.password !== values.repeatPassword) {
        errors.repeatPassword = "Must be equal password";
      }
      break;
    case 1:
      if (values.email.length < 5) {
        errors.email = "Invalid email address";
      }
      if (values.mobile.length < 10) {
        errors.mobile = "Invalid mobile";
      }
      if (values.city === "") {
        errors.city = "Required";
      }
      break;
    case 2:
      if (values.avatar === "") {
        errors.avatar = "Required";
      }
      break;
    default:
      break;
  }
  return errors;
};

export default getErrorsByValues;
