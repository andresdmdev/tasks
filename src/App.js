import './App.css';
import Lista from './componentes/Lista';

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='lista-principal'>
        <h1>Tasks</h1>
        <Lista />
      </div>
    </div>
  );
}

export default App;
