import React, { useState } from "react";
import EncabezadoFormulario from "./EncabezadoFormulario";
import CampoText from "./CampoText";
import CampoRadio from "./CampoRadio";

const listaCampos = ["marca","placa"];
const listaOpciones = ["Lleno","Tres cuartos","Mitad", "Un cuarto"];

function FormularioDatosVehiculo({onClickDatos,onClickVolver,onClickTema,tema}){
    const [nivelFuel,setNivelFuel] = useState(null);
    const [text,setText] = useState("");
    const [text1,setText1] = useState("");
    const [text2,setText2] = useState("");

    function handleOption(idOpcion){
      setNivelFuel(idOpcion)
  };


    return(
      <div className={"formulario " + "form"+tema}>
        <div className='temaBoton'>
          <button onClick={onClickTema}>Cambiar tema</button>
        </div>
        <EncabezadoFormulario titulo1={'Recepción del Vehículo'} titulo2={'Datos del vehículo'} tema={tema}/>
        <></>

        <CampoText etiquetaCampo={listaCampos[0]} formClass={"form"} text={text} setText={setText} key={listaCampos[0]}/>
        <CampoText etiquetaCampo={listaCampos[1]} formClass={"form"} text={text1} setText={setText1} key={listaCampos[1]} />


        <h4>Nivel de combustible:</h4>
        {listaOpciones.map(opcion =>(
            <CampoRadio opcion={opcion} param={nivelFuel} onHandleChange={handleOption} formClass={"form"} key={opcion}/>
        ))}
        <div>
            <p>
             Nivel de combustible seleccionado: <strong className={"form"} value={nivelFuel} >{nivelFuel}</strong>
            </p>
        </div>
        <div>
        <h5>Daños:</h5>
          <textarea 
          placeholder='Describa brevemente los daños de su vehiculo...' 
          rows={4} 
          cols={60} 
          className={"form"} 
          value={text2} 
          onChange={e => setText2(e.target.value)} 
          key={"daños"}/>
        </div>
        <div className={"navegacion " + "nav"+tema}>
            <button onClick={
                onClickVolver
            }>Volver</button>
            <button onClick={()=>{
                setText('');
                setNivelFuel(null)
                onClickDatos(text,text1,nivelFuel,text2);
            }}>Continuar</button>
        </div>
      </div>
    );
}

   
export default FormularioDatosVehiculo;

