import React from 'react'
import MyIngridient from './Ingridient'


export default function IngridientList({Ingridients}) {
    let IngridientElement = Ingridients.map(myIngri =>{
        return <MyIngridient key={myIngri.id} {...myIngri}/>
    })
    return (
        <div>
            {IngridientElement}
        </div>
    )
}
