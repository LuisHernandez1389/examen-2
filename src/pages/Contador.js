import React from 'react';
import { useState } from 'react';


const Contador = () => {
 const [contador, setContador] = useState(0);

 const sumarUno = ( ) => {
  setContador ( contador + 1 );
 }

 const restarUno = () => {
  if (contador > 0) {
    setContador (contador - 1);
  }
 }

 const reiniciar = ( ) => {
  setContador(0); 
 }


 return ( 
    <div>
      <h1>Contador: {contador} </h1>
      <button onClick={sumarUno} >Sumar + 1</button>
      <button onClick={restarUno} >Restar - 1</button>
      <button onClick={reiniciar} >Reiniciar</button>
    </div>
  );
}

export default Contador