import React from "react";
import CampoCheckbox from "./CampoCheckbox";

function ListaServiciosFormulario({services,onUpdateService}){

    return(
        <div>
            {services.map(service => (
                <CampoCheckbox
                service={service}
                key={service.servicio}
                onUpdate={onUpdateService} 
                formClass={"form"} />
            ))}
        </div>
    );
}

export default ListaServiciosFormulario;