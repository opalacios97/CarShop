import React from "react";

function CampoText({etiquetaCampo,text,setText,formClass}){
  
    return(
        <div>     
          <h4>{etiquetaCampo[0].toUpperCase() + etiquetaCampo.substring(1)+":"}</h4>
          <input 
          placeholder= {`Introducir ${etiquetaCampo}`} 
          value={text}
          onChange={e => setText(e.target.value)} 
          className={formClass} 
          key={((etiquetaCampo.split("")).join("")).toLowerCase()}/>
        </div>
    );
}

export default CampoText;
