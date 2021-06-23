import React, { Fragment,useState } from 'react'

 const Contador = () => {

        const  [num, setNumero] = useState(0);
        const Aumentar = ()=> {setNumero (num+1)}
        const Reducir = () => {setNumero (num-1)}
    return (
        <Fragment>
                    <h2>cantidad de contador:{num}</h2>
                    <button onClick={Aumentar}className="btn btn-primary me-3">Aumentar</button>
                    <button onClick={Reducir} className="btn btn-secondary me-3">Reducir</button>
        </Fragment>
    )
}

export default Contador;