import React from "react";

function EncabezadoFormulario({titulo1,titulo2}){
    return(
      <div>
        <div className='encabezado'>
          <h1>CarWash - {titulo1}</h1>
        </div>
        <h2>{titulo2}</h2>
      </div>
  
    )
  }

  export default EncabezadoFormulario;