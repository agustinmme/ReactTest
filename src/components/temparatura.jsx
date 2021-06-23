import React,{useState} from 'react'

export default function Temparatura() {


    const [temperatura, setTemperatura] = useState(19);
  
    const Subir = () => {
      setTemperatura(temperatura + 1);
    };
  
    const Bajar = () => {
      setTemperatura(temperatura - 1);
    };
    let tipoA ="alert alert-primary";
    temperatura > 21 ? tipoA="alert alert-danger" : tipoA="alert alert-primary"
    return (
        <div className="container">
        <h2>Temperatura ES :{temperatura}</h2>
        <p className={tipoA}>
            {
                temperatura > 21 ? 'hace calor' : 'hace frio'
            }
  
        </p>
        <button onClick={Subir} className="btn btn-primary me-3">Aumentar </button>
        <button onClick={Bajar} className="btn btn-danger me-3"> Reducir </button>
      </div>
    )
}