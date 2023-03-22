const Validation2 = (values) => {
  let errors = {};
  if (!values.fullname) {
    errors.fullname = "*Name is required";
  } else if (values.fullname.length < 2) {
    errors.fullname = "Name is more then 2";
  }

  if (!values.email) {
    errors.email = "*Email is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "*Email is required";
  }

  if (!values.password) {
    errors.password = "*password is required";
  }
  // if (!values.file) {
  //   errors.file = "*photo is required";
  // }

  return errors;
};
export default Validation2;
