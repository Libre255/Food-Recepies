import React from 'react'

export default function MyIngridient({name, amount}) {
    return (
        <>
            <span>{name}</span>
            <span>{amount}</span>
        </>
    )
}
