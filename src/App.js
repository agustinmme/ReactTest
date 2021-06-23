import './App.css';
import Contador from './components/Contador'
import Listado from './components/Listado'
import Temparatura from './components/temparatura';

function App() {
  return (
    <div className="App mt-5">
      <Contador></Contador>
      <Listado></Listado>
      <Temparatura></Temparatura>
    </div>
  );
}

export default App;
