
import './App.css';
import Testimonio from './componentes/Testimonio.js';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
      <h1>Este es un pequeño ejercicio de React</h1>
      <Testimonio
      name = 'Jesus Israel Corona'
      cargo = 'Ingeniero de Sofware'
      testimonio = 'Este es un testimonio Este es un testimonio Este es un testimonio Este es un testimonioEste es un testimonio Este es un testimonio Este es un testimonio Este es un testimonio Este es un testimonio Este es un testimonio'
      imagen = '512'
      />

      <Testimonio
      name = 'Aldo Enrique Cortez'
      cargo = 'Ciber Seguridd'
      testimonio = 'Este es un testimonio Este es un testimonio Este es un testimonio Este es un testimonio Este es un testimonio EstEste es un testimonio Este es un testimonio Este es un testimonio Este es un testimonioe es un testimonio'
      imagen = '512'
      />

      <Testimonio
      name = 'Ramon Valdez'
      cargo = 'Diseñador Grafico'
      testimonio = 'Este es un testimonio Este es un testEste es un testimonio Este es un testimonio Este es un testimonio Este es un testimonioimonio Este es un testimonio Este es un testimonio Este es un testimonio Este es un testimonio'
      imagen = '512'
      />
      </div>
      
      
    </div>
  );
}

export default App;
