import {useReducer} from "react";
import React from "react";
import EncabezadoFormulario from "./EncabezadoFormulario";
import ListaServiciosFormulario from "./ListaServiciosFormulario";


const initialServices = [
  {servicio:'Cambio de aceite', tiempo:1, boolean: false},
  {servicio:'Cambio de frenos', tiempo:1.2, boolean: false},
  {servicio:'Alineación y balanceo', tiempo:1, boolean: false},
  {servicio:'Diagnóstico general', tiempo:2, boolean: false},
  {servicio:'Revisión de sistema eléctrico', tiempo:2, boolean: false},
  {servicio:'Revisión de suspensión', tiempo:1, boolean: false},
  {servicio:'ABC', tiempo:2.5, boolean: false}
];


function FormularioServicios({onClickDatos,onClickVolver}){   
  
      const [services,dispatch] = useReducer(
        servicesReducer,
        initialServices
      )

      let serviciosShowString = ((services.filter(s => (s.boolean === true))).map(s => s.servicio)).join();
      let tiempoShowString =  ((services.filter(s => (s.boolean === true))).map(s => s.tiempo)).reduce((a,b)=>a+b,0);
      
      function handleUpdateService(service){
        dispatch({
          type: 'update',
          service: service,
        });
      }

      return(
        <div className='formulario'>
          <EncabezadoFormulario titulo1={'Recepción del Vehículo'} titulo2={'Selección de servicios'} />
          <></>   
          <ListaServiciosFormulario services={services} onUpdateService={handleUpdateService} />  
          <p><strong>Los servicios seleccionados son: </strong>{serviciosShowString}.</p>
          <p><strong>El tiempo estimado es: </strong>{tiempoShowString} horas.</p>
          <div className='navegacion'>
          <button onClick={
                onClickVolver
          }>Volver</button>
          <button onClick={()=>{
                  onClickDatos(serviciosShowString,tiempoShowString);
          }}>Continuar</button>
        </div>
        </div>
      );
} 



function servicesReducer(services,action){
  switch (action.type){
    case 'update':{
      return services.map(s => {
        if (s.servicio === action.service.servicio){
          return (action.service)
        }else{
          return s;
        }
      })
    }default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}


export default FormularioServicios;
  