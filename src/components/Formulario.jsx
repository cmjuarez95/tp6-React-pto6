import React from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form"
import { useEffect, useState } from "react";


const Formulario = () => {
      
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    

  console.log(watch("example")) // watch input value by passing the name of it

    return (
        <section className='border border-secondary mt-2'>
            <h5 className='m-2'>Administrar Colores</h5>
            <Form className='text-center'>
                <div className='form_color d-flex justify-content-start align-items-center'>
                {/* register your input into the hook by invoking the "register" function */}
                <div className='color_ejemplo m-2'> </div>
                <Form.Control className='ms-2 w-25 h-50 text-center' type="text" placeholder="Ingresa un color" {...register("example")} />
                </div>
               

              
                 <Button className='m-2 bg-primary-subtle' variant="primary" type="submit">
                    Guardar
                </Button>
            </Form>
        </section>
    );
};

export default Formulario;