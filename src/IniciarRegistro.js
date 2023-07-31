import React from "react";
import EncabezadoFormulario from "./EncabezadoFormulario";


function IniciarRegistro({tema}){

    return(
      <div className={"formulario "+"form"+tema}>
        <EncabezadoFormulario titulo1={'Recepción de vehículo'} titulo2={'Acceder a formulario de registro'} tema={tema}/>

      </div>
    );
  }
  

  export default IniciarRegistro;