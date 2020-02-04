import React from 'react'

export default function MyIngridient({name, amount}) {
    return (
        <div >
            <span>{name}</span>
            <span>{amount}</span>
        </div>
    )
}
