import React from 'react'
import IngridientList from './IngridientList'

export default function Recepie(props) {
   let {name, cookTime, servings, instructions, Ingridients} = props
    return (
     <div className="myRecepie">
        <div className="TitleRecepieBox">
        <div>
           <h1>{name}</h1>
        </div>
        <div className='edit-delet'>
            <button className='btn btn-addRecepie'>Edit</button>
            <button className='btn btn-deletRecepie'>Delet</button>
        </div>
     </div>
        
        <div className="myPadding">
            <span>Cook Time:</span>
            <span>{cookTime}</span>
        </div>
        <div className="myPadding">
            <span>Serving:</span>
            <span>{servings}</span>
        </div>
        <div className="myPadding">
            <span>Instructions:</span> 
            <div className="ingredients" > {instructions}
            </div>
        </div>
        <div className=" myPadding">
            <span>Ingredients:</span>
           
           <IngridientList className="ingredients ingrdients-space" Ingridients={Ingridients}/>
        </div>
     </div>
    )
}
