import { useEffect, useState } from "react";
import validationInputs from "./validationInputs.js";
import validationSend from "./validationSend.js";
import ButtonSend from "./ButtonSend.jsx";
import { useForm } from '@formspree/react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function FormContact(){

    const [input, setInput]= useState({
        name: "",
        email: "",
        message: "",
      });
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [touched, setTouched] = useState({
        name: false,
        email: false,
        message: false,
    });

    const [disable, setDisable] =useState(false);

    // Este useEffect controla que el boton "Enviar" se habilite o no
    useEffect(() => { 
        let errExists = validationSend(errors, input);
        !errExists
        ? setDisable(true)
        : setDisable(false)
    }, [errors, input]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setInput({
          ...input,
          [name]: value,
        });
        // Marca el campo como "touched" cuando el usuario interactúa con el mismo
        setTouched({
          ...touched,
          [name]: true,
        });
    };

    // Valida los campos solo si el usuario interactua con ellos (touched)
    useEffect(() => {
        if (touched.name) {
          const validationErrors = validationInputs({ name: input.name });
          setErrors((prevErrors) => ({
            ...prevErrors,
            name: validationErrors.name,
          }));
        }
        if (touched.email) {
          const validationErrors = validationInputs({ email: input.email });
          setErrors((prevErrors) => ({
            ...prevErrors,
            email: validationErrors.email,
          }));
        }
        if (touched.message) {
          const validationErrors = validationInputs({ message: input.message });
          setErrors((prevErrors) => ({
            ...prevErrors,
            message: validationErrors.message,
          }));
        }
    }, [input, touched]);

    const [state, handleSubmit] = useForm("xjvqokgz");
    //Funcion que despacha el input mediante Formspree y luego lo setea
    useEffect(() => {
        if (state.succeeded) {
          setInput({
            name: "",
            email: "",
            message: "",
          });
          mensaje_success_Toast();
          handleSubmit({ succeeded: false });
        }
      }, [state.succeeded]);

    //Mostrar mensaje cuando se envia un mensaje mediante el form
    const MESSAGE_EMAIL_SENDED = "Se ha enviado el mensaje con éxito.";
    let currentToastIdSuccess = null;
    const mensaje_success_Toast = () => {
        if (currentToastIdSuccess) {
        toast.update(currentToastIdSuccess, {
            render: MESSAGE_EMAIL_SENDED,
            autoClose: 5000,
        });
        } else {
        currentToastIdSuccess = toast.success(MESSAGE_EMAIL_SENDED, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            toastId: "custom-toast-id",
            style: {
                marginTop: "60px",
                width: "500px",
            },
        });
        }
    };

    return(
        <div className="h-1/2 w-full flex justify-center items-center xl:h-full">
            <ToastContainer />
            <form onSubmit={handleSubmit} className="bg-[rgba(197,197,197,0.96)] overflow-hidden flex flex-col w-[94%] h-[90%] sm:h-[86%] sm:w-[80%] rounded-[10px] p-4 gap-2 md:h-[92%] lg:h-[92%] xl:h-[66%] md:max-w-[700px] 2xl:h-[70%]">
                <div className=" flex flex-row gap-6 text-sm md:text-lg w-full xl:text-xl">
                    <div className="flex flex-col flex-grow">
                        <label htmlFor="input" className=" w-max bg-none text-sm md:text-lg xl:text-xl text-black">Nombre</label>
                        <input 
                        type="text" 
                        name="name" 
                        value={input.name} 
                        className=" w-full rounded-lg pl-2 border-2 border-primaryColor h-[30px] 2xl:h-[35px]"
                        placeholder="Ingrese su nombre..."
                        onChange={(event) => handleInputChange(event)}
                        />
                        <section className="min-h-[20px] md:min-h-[28px] text-[12px] xs:text-sm md:text-lg ">
                            {errors.name ? <p className="md:pl-1 text-red-600 ">{errors.name}</p> : null}
                        </section>
                    </div>
                    <div className="flex flex-col flex-grow">
                        <label htmlFor="input" className=" w-max bg-none text-sm md:text-lg xl:text-xl text-black">Correo electrónico</label>
                        <input 
                        type="email" 
                        name="email" 
                        value={input.email} 
                        className=" w-full rounded-lg pl-2 border-2 border-primaryColor h-[30px] 2xl:h-[35px]"
                        placeholder="Ingrese su email..."
                        onChange={(event) => handleInputChange(event)}
                        />
                        <section className="min-h-[20px] md:min-h-[28px] xs:text-sm  text-[12px] md:text-lg">
                            {errors.email ? <p className="md:pl-1 text-danger-600">{errors.email}</p> : null}
                        </section>
                    </div>
                </div>
                <div className="flex flex-col text-black text-sm md:text-lg xl:text-xl">
                    <label htmlFor="input" className=" w-max bg-none text-sm md:text-lg xl:text-xl text-black">Mensaje</label>
                    <textarea 
                        type="text" 
                        name="message" 
                        value={input.message} 
                        className=" w-full h-[70px] sm:h-[100px] md:h-[90px] rounded-lg pl-2 pt-1  text-start border-2 border-primaryColor xl:h-[220px] 2xl:h-[190px] "
                        placeholder="Ingrese un mensaje aquí..."
                        onChange={(event) => handleInputChange(event)}
                        />
                        <section className="min-h-[20px] text-[12px] xs:text-sm md:text-lg md:min-h-[28px]">
                        {errors.message ? (
                            <p className="md:pl-1 text-danger-600">{errors.message}</p>
                            ) : (
                            input.message && !errors.message ? (
                                <p className="md:pl-1 text-lime-600">{`Máximo de 1000 carácteres (${input.message.length}/1000)`}</p>
                            ) : null
                        )}
                        </section>
                </div>
                <div className="flex justify-center items-center">
                    { disable? 
                    (
                    <ButtonSend
                    className="text-sm"
                    type="submit"
                    onClick={(event) => handleSubmit(event)}
                    />
                    ) 
                    : 
                    (
                    <ButtonSend disabled />
                    )
                    } 
                </div>
            </form>
        </div>
    )
}