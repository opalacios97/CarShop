import React from "react";
import EncabezadoFormulario from "./EncabezadoFormulario";


function OrdenTrabajo({state,idActual,tema}){

    if (!state || !Array.isArray(state)) {
      return <div>Error: Invalid state data</div>;
    }
        
    let data = state.filter((item) => (item.id===idActual))
    data = data[0];
   
    return(
      <div className={"formulario "+"form"+tema}>
        <EncabezadoFormulario titulo1={'Orden de trabajo N° '+ (data.id)} titulo2={''} tema={tema}/>
        <div>
          <h2>Datos del cliente</h2>
          <p>Nombre: {data.nombre}</p>
          <p>Email: {data.email}</p>
          <p>Teléfono: {data.telefono}</p>
          <p>Identificación: {data.identificacion}</p>
          <p>Tipo de identifiación: {data.tipoId}</p> 
        </div>
        <div>
          <h2>Datos del vehículo</h2>
           <p>Marca: {data.marca}</p>
           <p>Placa: {data.placa}</p>
           <p>Nivel de combustible: {data.nivelFuel}</p>
           <p>Daños: {data.danios}</p>
         </div>
         <div>
          <h2>Servicios</h2>
           <p>Servicios seleccionados: {data.servicios}</p>
           <p>Tiempo estimado: {data.tiempo}</p>
         </div>
      </div>
    );
 }
  

  export default OrdenTrabajo;