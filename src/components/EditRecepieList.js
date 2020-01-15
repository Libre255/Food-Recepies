import React from 'react'
import IngredientsEdit from './ingredientsEdit'

export default function EditRecepieList({recepieSelected}) {
  return (
    <div className="EditRecepie">
      <button className="CanselEdit">X</button>
      <div>
      <label for="name">Name</label>
       <input name="name" type="text" value={recepieSelected.name}/>
      </div>
      <div>
      <label for="CookT">Cook Time</label>
       <input name="CookT" type="text" value={recepieSelected.cookTime}/>
      </div>
      <div>
      <label for="Servings">Servings</label>
       <input name="Servings" type="text"value={recepieSelected.servings}/>
      </div>
      <br/>
      <div>
       <label for="introductions">introductions</label>
       <br/>
       <textarea id="introductions"
       rows="4"
       name="introductions"
       value={recepieSelected.instructions}
       ></textarea>
      </div>
      <br/>
      <div className="ingredientsEdit">
        <h3>Ingredients</h3>
        <div className="ingredients-List">
            <div>Name</div>  
            <div>Amount</div>
            <div></div>
            {recepieSelected.Ingridients.map(ingredient=>{
               return <IngredientsEdit ingredient={ingredient}/>
            })}
            
        </div>
      </div>
      <br/>
      <br/>
      <button className='btn btn-addRecepie'>Add Ingredients</button>
    </div>
  )
}
