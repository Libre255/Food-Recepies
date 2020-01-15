import React from 'react'
import Ingridient from './Ingridient'


export default function IngridientList({AllIngridient}) {
    let IngridientElement = AllIngridient.map(myIngri =>{
        return (<Ingridient key={myIngri.id} {...myIngri}/>)
        })
    return (
        <div>
            {IngridientElement}
        </div>
    )
}
