import React, {useContext} from 'react'
import IngredientsEdit from './ingredientsEdit'
import {TestContext} from './App'
import uuidv4 from 'uuid/v4' 

export default function EditRecepieList({recepieSelected}) {
  // console.log( recepieSelected)
  let {HandleRecepieChange, HandleSelectRecepie} = useContext(TestContext)

  //*******************  My Functions
  let handleChange = (Change)=>{
    HandleRecepieChange(recepieSelected.id, {...recepieSelected, ...Change}) //Whe OVERWRITE recepieSelected with the Object Change!:D
    //recepieSelected = {name, servings, CooktTime, introductions, etc..}
    //We are overwriting recepieSelected with the Change object: let Change = {name:e.target.value}
    //wich equals : let edited_Object = {name:e.target.value, servings, CooktTime, introductions, etc..} 
  }
  let handleIngredientChange = (id, Ingredient ) => {
    const newIngredients = [...recepieSelected.Ingridients]  //React doesnt allow you to change the state without using setRecepie! thats why we copy our array/object
    //so we can edit that "new" array/object that is not attach to a useState so later we can insert the hole edited version to the original array/object by using setState
    const index = newIngredients.findIndex(ing => ing.id === id) //If the ingridient ID match the Id of the item we click we are gonna get return that index
    newIngredients[index] = Ingredient //newRecepies[index] = We are going to select with Recepie (searching with the ID)  //recepieArgu = we are going to insert the "new" value of that recepie
    //newIngredient[0] = {...ingredient, ...change} 
    // let {name:e.target.value} = change destructuring change and inserting a new value
    //then we are getting inside the change obejct and change the propertie {name:e.target.value}
    handleChange({Ingridients: newIngredients})//Here we destructuring ingridients form the recepie = let {Ingridients: newIngredients} = recepieSelected
     //Now we are inserting the Totaly new recepie plus the editet version! :DD:D:D:D   
  }
  function addIngridient(){
    let newIngridient = {
      id: uuidv4(),
      name:"",
      amount:undefined
    }
    handleChange({Ingridients:[...recepieSelected.Ingridients, newIngridient]})
  }
  function deletIngridient(id){
    handleChange({Ingridients: recepieSelected.Ingridients.filter(i=> i.id !== id)})
  }


  return (
    <div className="EditRecepie">
      <button className="CanselEdit" onClick={()=>{HandleSelectRecepie(undefined)}}>X</button>
      <div>
      <label htmlFor="name">Name</label>
       <input name="name" type="text" value={recepieSelected.name}
       onChange={e => handleChange({name:e.target.value})}/>
      </div>
      <div>
      <label htmlFor="CookT">Cook Time</label>
       {/* Here we destructuring Change and inserting a new value in the propertie of Name! */}
       <input name="CookT" type="text" value={recepieSelected.cookTime} onChange={e => handleChange({cookTime:e.target.value})}
       />
      </div>
      <div>
      <label htmlFor="Servings">Servings</label>
       <input name="Servings" type="text"value={recepieSelected.servings} onChange={e => handleChange({servings:parseInt(e.target.value) || ""})}/>
      </div>
      <br/>
      <div>
       <label htmlFor="introductions">introductions</label>
       <br/>
       <textarea id="introductions"
       rows="4"
       name="introductions"
       value={recepieSelected.instructions}
       onChange={e => handleChange({instructions:e.target.value})} />
      </div>
      <br/>
      <div className="ingredientsEdit">
        <h3>Ingredients</h3>
        <div className="ingredients-List">
            <div>Name</div>  
            <div>Amount</div>
            <div></div>
            {recepieSelected.Ingridients.map(ingredient=>{
               return <IngredientsEdit key= {ingredient.id} ingredient={ingredient}
                handleIngredientChange={handleIngredientChange}
                deletIngridient={deletIngridient}
                />
            })}
            
        </div>
      </div>
      <br/>
      <br/>
      <button className='btn btn-addRecepie' onClick={()=>addIngridient()}>Add Ingredients</button>
    </div>
  )
}
