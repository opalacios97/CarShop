import React from "react";

function CampoCheckbox({service, onUpdate,formClass}){

    return(
        <div key={service.servicio}>
              <input
                  type="checkbox"
                  checked={service.boolean}
                  onClick={e => {
                    onUpdate({
                        ...service,
                        boolean: !(e.target.checked)
                    });
                  }}
                  onChange={e => {
                    onUpdate({
                        ...service,
                        boolean: e.target.checked
                    });
                  }}
                  className={formClass}/>     
              <label htmlFor={service.servicio}>{service.servicio}</label>
        </div>
    );
}

export default CampoCheckbox;