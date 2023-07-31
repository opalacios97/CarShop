import React from "react";
import EncabezadoFormulario from "./EncabezadoFormulario";


function GenerarOrden({tema}){

    return(
      <div className={"formulario "+"form"+tema}>
        <EncabezadoFormulario titulo1={'Recepción de vehículo'} titulo2={'Visualizar orden de trabajo'} tema={tema} />
      </div>
    );
  }
  

  export default GenerarOrden;