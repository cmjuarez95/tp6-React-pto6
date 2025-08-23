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
        <div>
            <form>
                {/* register your input into the hook by invoking the "register" function */}
                <input defaultValue="test" {...register("example")} />

                {/* include validation with required or other standard HTML validation rules */}
                <input {...register("exampleRequired", { required: true })} />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}

                 <Button variant="primary" type="submit">
                    ➕
                </Button>
            </form>
        </div>
    );
};

export default Formulario;