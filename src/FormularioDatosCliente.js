import React,{useState} from "react";
import EncabezadoFormulario from "./EncabezadoFormulario";
import CampoRadio from "./CampoRadio";
import CampoText from "./CampoText";


const listaCampos = ["nombre","email","teléfono","identificación"];
const listaOpciones = ["Cédula","Ruc","Pasaporte"];

function FormularioDatosCliente({onClickDatos,onClickVolver,onClickTema,tema}){
    const [tipoID,setTipoID] = useState(null);
    const [text,setText] = useState("");
    const [text1,setText1] = useState("");
    const [text2,setText2] = useState("");
    const [text3,setText3] = useState("");

    function handleOption(idOpcion){
        setTipoID(idOpcion)
    };


    return(
      <div className={"formulario " + "form"+tema}>
        <div className='temaBoton'>
          <button onClick={onClickTema}>Cambiar tema</button>
        </div>
        <EncabezadoFormulario titulo1={'Recepción del Vehículo'} titulo2={'Datos del cliente'} tema={tema}/>
        <></>
        
        <CampoText etiquetaCampo={listaCampos[0]} formClass={"form"} text={text} setText={setText} key={listaCampos[0]}/>
        <CampoText etiquetaCampo={listaCampos[1]} formClass={"form"} text={text1} setText={setText1} key={listaCampos[1]}/>
        <CampoText etiquetaCampo={listaCampos[2]} formClass={"form"} text={text2} setText={setText2} key={listaCampos[2]}/>
        <CampoText etiquetaCampo={listaCampos[3]} formClass={"form"} text={text3} setText={setText3} key={listaCampos[3]}/>
     

        <h4>Tipo de identificación:</h4>
        {listaOpciones.map(opcion =>(
            <CampoRadio  opcion={opcion} param={tipoID} onHandleChange={handleOption} formClass={"form"} key={opcion}/>      
        ))}
        <div>
            <p>
            Tipo de identificación seleccionada: <strong className={"form"} value={tipoID} >{tipoID}</strong>
            </p>
        </div>
        <div className={"navegacion " + "nav"+tema}>
            <button onClick={
                onClickVolver
            }>Volver</button>
            <button onClick={()=>{
                setText('');
                setTipoID(null)
                onClickDatos(text,text1,text2,text3,tipoID);
            }}>Continuar</button>
        </div>
      </div>
    );
}

export default FormularioDatosCliente;


