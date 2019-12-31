import React from 'react';
import '../css/app.css';
import RecipeList from './recipeList'


function App() {
  return (
    <RecipeList recepies={sampleRecepie}/>
  );
}

let sampleRecepie = [
  {
    id:1,
    name:"chicken",
    servings:3,
    cookTime:"1:45",
    instructions:`1: Comprar Pollo
    2:Consinar Pollito
    3:Comer Pollito`,
    Ingridients:[
      {
        id:1,
        name:"chicken ",
        amount:"3 pounds  "
      },
      {
        id:2,
        name:"salt ",
        amount:"1 pounds"
      }
    ]

  },
  {
    id:2,
    name:"Pork",
    servings:2,
    cookTime:"3:10",
    instructions:`
    1: Traer Puerquito
    2:Cosinar Puerquito
    3:Comer Puerquito`,
    Ingridients:[
      {
        id:1,
        name:"pork ",
        amount:"6 pounds"
      },
      {
        id:2,
        name:" ketchup ",
        amount:"1 pounds"
      }
    ]
  }
]
export default App;
//rfc to creat componen function