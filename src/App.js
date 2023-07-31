import React from 'react';
import FormularioDatosCliente from './FormularioDatosCliente';
import FormularioDatosVehiculo from './FormularioDatosVehiculo';
import FormularioServicios from './FormularioServicios';
import OrdenTrabajo from './OrdenTrabajo';
import IniciarRegistro from './IniciarRegistro';
import GenerarOrden from './GenerarOrden';
import './App.css';
import {useReducer,useState} from "react"


//Puntos extra tema claro y oscuro, esto se menciona en ultimas clases



function App() {

  const [state,dispatch] = useReducer(estadoReducer,initialState);
  const [contador, setContador] = useState(0);
  const [nextId, setNextId] = useState(3);
  const [datos, setDatos] = useState({});
  const [datos1, setDatos1] = useState({});
  const [datos2, setDatos2] = useState({});
  const [temaActual, setTema] = useState("Claro")

  function handleTema(){
    if (temaActual==="Claro"){
      setTema("Oscuro")
    }else{
      setTema("Claro")
    }
  }

  function handleRetroceder(){
    setContador(contador-1);
  }

  function handleStart() {
    setContador(contador + 1);
    dispatch({ type: 'iniciar' });
  }

  function handleSendInfoCliente(nombre,email,telefono,identificacion,tipoId) {
    setContador(contador + 1);
    setDatos({
            nombre: nombre,
            email: email,
            telefono: telefono,
            identificacion: identificacion,
            tipoId: tipoId})
  }

  function handleSendInfoVehiculo(marca,placa,nivelFuel,danios) {
    setContador(contador + 1);
    setDatos1({
            marca: marca,
            placa: placa,
            nivelFuel: nivelFuel,
            danios: danios});
  }

  function handleSendInfoServicios(serviciosShowString,tiempoShowString) {
    setContador(contador + 1);
    setDatos2({
            servicios: serviciosShowString,
            tiempo: tiempoShowString
          });
  }

  function handleSendInfoAll() {
    setContador(contador + 1);
    dispatch({
      type: 'incrementServicios',
      nombre: datos.nombre,
      email: datos.email,
      telefono: datos.telefono,
      identificacion: datos.identificacion,
      tipoId: datos.tipoId,
      marca: datos1.marca,
      placa: datos1.placa,
      nivelFuel: datos1.nivelFuel,
      danios: datos1.danios,
      id: nextId,
      servicios: datos2.servicios,
      tiempo: datos2.tiempo
    });
  }

  function handleNew() {
    setNextId(nextId + 1);
    setContador(0);
    dispatch({ type: 'nuevociclo' });
   
  }


  if(contador === 0){
    return(
      <div className= {"pantalla " + "pant"+temaActual} >
        <div className='temaBoton'>
          <button onClick={handleTema}>Cambiar tema</button>
        </div>
        <IniciarRegistro tema={temaActual} />
        <div className={"navegacion " + "nav"+temaActual}>
          <button onClick={handleStart}>Iniciar</button>
        </div>
      </div>
    )
  }else if(contador === 1){
    return(
      <div className={"pantalla " + "pant"+temaActual}>
        <FormularioDatosCliente onClickDatos={handleSendInfoCliente} onClickVolver={handleRetroceder} onClickTema={handleTema} tema={temaActual}/>  
      </div>
    )
  }else if(contador === 2){
    return(
      <div className={"pantalla " + "pant"+temaActual}>
        <FormularioDatosVehiculo onClickDatos={handleSendInfoVehiculo} onClickVolver={handleRetroceder} onClickTema={handleTema} tema={temaActual}/>
      </div>
    )
  }else if(contador === 3){

    return(
      <div className={"pantalla " + "pant"+temaActual}>
        <FormularioServicios onClickDatos={handleSendInfoServicios} onClickVolver={handleRetroceder} onClickTema={handleTema} tema={temaActual}/>
      </div>
    )
  }else if(contador === 4){

    return(
      <div className={"pantalla " + "pant"+temaActual}>
        <div className='temaBoton'>
          <button onClick={handleTema}>Cambiar tema</button>
        </div>
        <GenerarOrden tema={temaActual}/>
        <div className={"navegacion " + "nav"+temaActual}>
          <button onClick={handleRetroceder}>Volver</button>
          <button onClick={handleSendInfoAll}>Ver orden de trabajo</button> 
        </div>
      </div>
    )

  }else{
    return(
      <div className={"pantalla " + "pant"+temaActual}>
        <div className='temaBoton'>
          <button onClick={handleTema}>Cambiar tema</button>
        </div>
        <OrdenTrabajo state={state} idActual={nextId} tema={temaActual}/>
        <p></p>
        <div className={"navegacion " + "nav"+temaActual}>
          <button onClick={handleRetroceder}>Volver</button>
          <button onClick={handleNew}>Confirmar</button>         
        </div>
      </div>
    )
  }
}


function estadoReducer(state,action){

  switch(action.type){
    case 'iniciar': {
      return state
    }

    case 'incrementServicios': {
      return[
        ...state,
        {id: action.id,      
          nombre: action.nombre,
          email: action.email,
          telefono: action.telefono,
          identificacion: action.identificacion,
          tipoId: action.tipoId,
          marca: action.marca,
          placa: action.placa,
          nivelFuel: action.nivelFuel,
          danios: action.danios,
          servicios: action.servicios,
          tiempo: action.tiempo
        }
      ];
    }
    case 'nuevociclo': {
      return state   
    }
    default:
      throw new Error('Unexpected action')    
}}


const initialState = [
  { id: 0, nombre: "Hola", email: "Hola", telefono: "Hola", identificacion: "Hola", tipoId: "Hola"},
  { id: 1, nombre: "Hello", email: "Hello", telefono: "Hello", identificacion: "Hello", tipoId: "Hello"},
  { id: 2, nombre: "Ciao", email: "Ciao", telefono: "Ciao", identificacion: "Ciao", tipoId: "Ciao", data: "Ciao"}];

export default App;
