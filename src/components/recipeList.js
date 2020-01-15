import React, {useContext} from 'react'
import Recepie from './recepie'
import {TestContext} from './App' 



export default function RecipeList({MyReceta}) {

  let {HandleAddRecepie} = useContext(TestContext)

    return (
      <div className="RecepieList">
        <div>
           {MyReceta.map(recepie =>{
              return(
                <Recepie 
                  key={recepie.id} 
                  {...recepie}
                  
                />
              )  
           })}
       </div>
        <div className="addRecepie">
          <button onClick={HandleAddRecepie} className="btn btn-addRecepie">Add Recepie</button>
        </div>
      </div>
   )
}
