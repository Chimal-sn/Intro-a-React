import React from "react";
import Foto from "./assets/gato.png";


function Tarjeta() {
    const nombre = "Sony Luis";
    const profesion = "Desarrollador web";


    return (
        <div className="tarjeta">
            <div className="datos">
                <h2>Hola, soy {nombre}</h2>
                <h4>{profesion}</h4>
            </div>
            <div className="imagen">
                <img src={Foto} alt="Foto" />
            </div>
        </div>
    );
}

export default Tarjeta;