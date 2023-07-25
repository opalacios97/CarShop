import React from "react";
import EncabezadoFormulario from "./EncabezadoFormulario";


function IniciarRegistro(){

    return(
      <div className='formulario'>
        <EncabezadoFormulario titulo1={'Recepción de vehículo'} titulo2={'Acceder a formulario de registro'} />

      </div>
    );
  }
  

  export default IniciarRegistro;