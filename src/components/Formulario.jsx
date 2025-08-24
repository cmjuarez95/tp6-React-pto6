import React from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form"
import { useEffect, useState } from "react";
import ListaCards from './ListaCards';


const Formulario = () => {
      
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const coloresLocalstorage = JSON.parse(localStorage.getItem("coloresKey")) || []   //toma los valores del localstorage salvo q este vacio crea un array nuevo
    const [colores, setColores] =useState(coloresLocalstorage); //hago que use el estado de la variable con el local storage

    useEffect(()=>{
        localStorage.setItem("coloresKey",JSON.stringify(colores))
    },[colores]) //Para guardar las tareas en el localstorage.

    const posteriorValidacion = (data) =>{

        const nuevoColor = { id: crypto.randomUUID(), name: data.color.trim() };
        //guardar color en el array
        setColores([...colores,nuevoColor])
        
        
        //limpiar el formulario
        reset()
    }

    const borrarColor=(id) =>{
        const coloresFiltrados = colores.filter((itemColor)=> itemColor.id !== id)
        setColores(coloresFiltrados)

    }

    return (
        <section className='border border-secondary mt-2'>
            <h5 className='m-2'>Administrar Colores</h5>
            <Form onSubmit={handleSubmit(posteriorValidacion)} className='text-center'>
                <div className='form_color d-flex justify-content-start align-items-center'>
                {/* register your input into the hook by invoking the "register" function */}
                <div className='color_ejemplo m-2'> </div>
                <Form.Control className='ms-2 w-25 h-50 text-center' type="text" placeholder="Ingresa un color ej: blue" {...register("color")} />
                </div>
               

              
                 <Button className='m-2 bg-primary-subtle' variant="primary" type="submit">
                    Guardar
                </Button>
            </Form>
            <ListaCards colores={colores} onDelete={borrarColor}></ListaCards>
        </section>
    );
};

export default Formulario;