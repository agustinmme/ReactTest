import React,{useState} from 'react'

export default function Listado() {


    const [num,SetNumeros] = useState([1,2,3,4,5,6]);

    return (
        <>
            <ul>
                {
                    num.map((item,index)=>
                    <li key={index} >
                            {item}
                    </li>
                    )
                }
            </ul>
        </>
    )
}
