import React from "react";
import EncabezadoFormulario from "./EncabezadoFormulario";


function GenerarOrden(){

    return(
      <div className='formulario'>
        <EncabezadoFormulario titulo1={'Recepción de vehículo'} titulo2={'Visualizar orden de trabajo'} />
      </div>
    );
  }
  

  export default GenerarOrden;