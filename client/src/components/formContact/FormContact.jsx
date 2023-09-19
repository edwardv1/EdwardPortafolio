import React, { useEffect, useState } from "react";
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

    const [disable, setDisable] =useState(false);
    // Este useEffect valida los campos en tiempo real
    useEffect(() => {
        setErrors(validationInputs(input));
    }, [input]);

    // Este useEffect controla que el boton "Enviar" se habilite o no
    useEffect(() => { 
        let errExists = validationSend(errors, input);
        !errExists
        ? setDisable(true)
        : setDisable(false)
    }, [errors, input]);

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setInput({
            ...input,
            [name]: value
        })
    };

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
        <div class="h-1/2 w-full flex justify-center items-center xl:h-full">
            <ToastContainer />
            <form onSubmit={handleSubmit} class="bg-[rgba(112,112,112,0.98)] flex flex-col w-[94%] h-[90%] sm:h-[86%] sm:w-[80%] rounded-[10px] p-4 gap-2 md:h-[92%] lg:h-[92%] xl:h-[66%] md:max-w-[700px] 2xl:h-[70%]">
                <div className=" flex flex-row gap-6 text-sm md:text-base lg:text-lg w-full xl:text-xl">
                    <div class="flex flex-col flex-grow">
                        <label for="input" class=" w-max bg-none text-sm md:text-base lg:text-lg xl:text-xl text-black">Nombre</label>
                        <input 
                        type="text" 
                        name="name" 
                        value={input.name} 
                        class=" w-full rounded-lg pl-2 border-2 border-sky-700 h-[30px] 2xl:h-[35px]"
                        placeholder="Ingrese su nombre..."
                        onChange={(event) => handleInputChange(event)}
                        />
                        <section class="min-h-[20px] xl:min-h-[28px] text-sm md:text-base xl:text-lg ">
                            {errors.name ? <p class="md:pl-1 text-danger-700 ">{errors.name}</p> : null}
                        </section>
                    </div>
                    <div class="flex flex-col flex-grow">
                        <label for="input" class=" w-max bg-none text-sm md:text-base lg:text-lg xl:text-xl text-black">Correo electrónico</label>
                        <input 
                        type="email" 
                        name="email" 
                        value={input.email} 
                        class=" w-full rounded-lg pl-2 border-2 border-sky-700 h-[30px] 2xl:h-[35px]"
                        placeholder="Ingrese su email..."
                        onChange={(event) => handleInputChange(event)}
                        />
                        <section class="min-h-[20px] xl:min-h-[28px] text-sm md:text-base xl:text-lg">
                            {errors.email ? <p class="md:pl-1 text-danger-700">{errors.email}</p> : null}
                        </section>
                    </div>
                </div>
                <div class="flex flex-col text-black text-sm md:text-base lg:text-lg xl:text-xl">
                    <label for="input" class=" w-max bg-none text-sm md:text-base lg:text-lg xl:text-xl text-black">Mensaje</label>
                    <textarea 
                        type="text" 
                        name="message" 
                        value={input.message} 
                        class=" w-full h-[100px] md:h-[90px] rounded-lg pl-2 pb-14 text-start border-2 border-sky-700 xl:h-[200px] xl:pb-40"
                        placeholder="Ingrese un mensaje aquí..."
                        onChange={(event) => handleInputChange(event)}
                        />
                        <section class="min-h-[20px] md:min-h-[30px] xl:min-h-[28px] text-sm md:text-base xl:text-lg">
                            {errors.message ? <p class="md:pl-1 text-danger-700">{errors.message}</p> : null}
                        </section>
                </div>
                <div class="flex justify-center items-center">
                    { disable? 
                    (
                    <ButtonSend
                    class="text-sm"
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