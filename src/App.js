import './App.css';
import logo from './img/amazon-logo.png';
import Lista from './componentes/lista';

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='contenedor-logo'>
        <img 
          src={logo} 
          className='amazon-logo' />
      </div>
      <div className='lista-principal'>
        <h1>Mis Tareas</h1>
        <Lista />
      </div>
    </div>
  );
}

export default App;
