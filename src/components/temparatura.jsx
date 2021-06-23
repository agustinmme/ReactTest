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
        <h2>temparatura ES :{temperatura}</h2>
        <p className={tipoA}>
            {
                temperatura > 21 ? 'hace calor' : 'hace frio'
            }
  
        </p>
        <button onClick={Subir} className="btn btn-primary me-3">Aumentar temparatura</button>
        <button onClick={Bajar} className="btn btn-secondary me-3">Aumentar Reducir</button>
      </div>
    )
}