import React from 'react'

export default function IngredientsEdit({ingredient, handleIngredientChange, deletIngridient}) {
  let ChangeMyIngridient = (changes)=>{
    handleIngredientChange(ingredient.id, {...ingredient, ...changes})
  } 
  return (
    <>
      <input type="text" value={ingredient.name} onChange={e => ChangeMyIngridient({name:e.target.value})}/> 
      <input type="text" value={ingredient.amount} onChange={e => ChangeMyIngridient({amount:e.target.value})}/>
      <button onClick={()=> deletIngridient(ingredient.id)}>X</button>
    </>
  )
}
