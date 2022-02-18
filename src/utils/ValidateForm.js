export const ValidateForm = ({
  firstName,
  lastName,
  email,
  inputPassword,
  confirmPassword,
}) => {
  console.log({inputPassword});
  const errors = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  if (!firstName) {
    errors.firstName = "Nombre es requerido!";
  }
  if (!lastName) {
    errors.lastName = "Apellido es requerido!";
  }
  if (!email) {
    errors.email = "Email es requerido!";
  } else if (!regex.test(email)) {
    errors.email = "No tiene un formato correcto";
  }
  if (!inputPassword) {
    errors.inputPassword = "Contraseña es requerida!";
  } else if (inputPassword.length < 5) {
    errors.inputPassword = "Debe ser mayor a 4 caracteres";
  } 
  if (!confirmPassword) {
    errors.confirmPassword = "Contraseña es requerida!";
  } else if (confirmPassword.length < 5) {
    errors.confirmPassword = "Debe ser mayor a 4 caracteres";
  }
  else if (confirmPassword !== inputPassword) {
    console.log("v1", confirmPassword, "v2", inputPassword);
    errors.confirmPassword = "Las contraseñas deben ser iguales";
  }
  return errors;
};
