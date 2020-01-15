import React from 'react'

export default function IngredientsEdit({ingredient}) {
  return (
    <>
      <input type="text" value={ingredient.name}/>
      <input type="text" value={ingredient.amount}/>
      <button>X</button>
    </>
  )
}
