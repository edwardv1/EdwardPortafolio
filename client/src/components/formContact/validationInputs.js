const validationInputs = (input) => {
  let errors = {};

  // Validacion de Name 
  let regexNumbers = new RegExp("[0-9]"); 
  if (!input.name) {
    errors.name = "Debe ingresar un nombre.";
  } else {
    if (input.name.length > 60) errors.name = "Máximo de 60 caracteres.";
    if (regexNumbers.test(input.name)) errors.name = "No ingrese números.";
  }

  // Validacion de Email 
  const regexEmail = /\S+@\S+\.\S+/;
  if (!input.email) {
    errors.email = "Debe ingresar un email.";
  } else {
    if (!regexEmail.test(input.email)) errors.email = "Ingrese un email válido.";
    if (input.email.length > 60) errors.email = "Máximo de 60 caracteres.";
  }
  
  // Validacion de Message  
  if (!input.message) {
    errors.message = "Debe ingresar un mensaje.";
  } else {
    if (input.message.length > 1000) errors.message = "No debe ingresar más de 1000 caracteres.";
  }

  return errors;
};

  
  export default validationInputs;