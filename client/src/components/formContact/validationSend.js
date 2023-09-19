const validationSend = (errors, input) => {
    let errExists = false;

    errors.name === undefined &&
    errors.email === undefined &&
    errors.message === undefined
    ?
    errExists = false
    :
    errExists = true;

    return errExists;
};

export default validationSend;