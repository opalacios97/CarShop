import React from "react";

function CampoRadio({opcion,param,onHandleChange,formClass}){
    return(
        <div key={opcion}>
            <input 
            type="radio" 
            id={opcion} 
            value={opcion}   
            checked = {param===opcion} 
            onChange={() => onHandleChange(opcion)}
            className={formClass}
            />
            <label htmlFor={opcion}>{opcion}</label>
        </div>
    );
}

export default CampoRadio;
  


