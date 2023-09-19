const validationInputs = (input) => {
    let errors = {};
  
    // Validacion de Name 
    let regexNumbers = new RegExp("[0-9]"); 
    if(!input.name) errors.name = "Debe ingresar un nombre.";
    if(input.name.length > 60) errors.name = "No ingrese mas de 60 carácteres.";
    if(regexNumbers.test(input.name)) errors.name= "No debe ingresar números.";

    // Validacion de Message  
    if(!input.message) errors.message = "Debe ingresar un mensaje.";
    if(input.message.length > 1200) errors.message = "No debe ingresar mas de 1200 carácteres.";
  
    // Validacion de Email 
    const regexEmail = /\S+@\S+\.\S+/;
    if(!regexEmail.test(input.email)) errors.email = "Ingrese un email valido.";
    if(!input.email) errors.email = "Debe ingresar un email.";
    if(input.email.length > 60) errors.email = "No debe ingresar mas de 60 carácteres."
  

    return errors;
  };
  
  export default validationInputs;