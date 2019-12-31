import React from 'react'
import Recepie from './recepie'

export default function RecipeList({recepies}) {
    return (
      <div className="RecepieList">
       <div>
           {recepies.map(recepie =>{
              return(
                <Recepie key={recepie.id} {...recepie}/>
              )  
           })}
       </div>
        <div className="addRecepie">
          <button className="btn btn-addRecepie">Add Recepie</button>
        </div>
      </div>
    )
}
