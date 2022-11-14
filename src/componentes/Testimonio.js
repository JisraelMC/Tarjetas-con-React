import React from "react";
import '../hojas-de-estilos/Testimonio.css'


function Testimonio(props) {
 return (
  <div className='contenedor-testimonio'>
    <img className='imagen-testimonio' src={require(`../imagenes/logo${props.imagen}.png`)} alt='foto-react'/>
    <div className="contenedor-texto-testimonio">
      <p className="nombre-testimonio">{props.name}</p>
      <p className="cargo-testimonio">{props.cargo}</p>
      <p className="texto-testimonio">{props.testimonio} </p>
    </div>
  </div>
 );   
}
export default Testimonio;