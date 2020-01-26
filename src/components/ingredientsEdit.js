import React from 'react'

export default function IngredientsEdit({ingredient, handleIngredientChange}) {
  let ChangeMyIngridient = (changes)=>{
    handleIngredientChange(ingredient.id, {...ingredient, ...changes})// We are overwriting ingredients with the object  let Changes = {name:e.target.value}
    //destructuring {name:e.target.value} = Changes 
  }
  //we are getting inside the new object change and then inside the propety "name" and inserting e.target value (thats what the {name:e.target.value} means) 
  return (
    <>
      <input type="text" value={ingredient.name} onChange={e => ChangeMyIngridient({name:e.target.value})}/> 
      <input type="text" value={ingredient.amount} onChange={e => ChangeMyIngridient({amount:e.target.value})}/>
      <button>X</button>
    </>
  )
}
