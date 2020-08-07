import React, {useState, useEffect} from 'react';
import '../css/app.css';
import RecipeList from './recipeList'
import uuidv4 from 'uuid/v4' // this is to create a unique key = {}
import EditRecepieList from './EditRecepieList'


export let TestContext = React.createContext() 

function App() {
 let [selectRecepieID, setSelectedRepecie] = useState()
 let [recepies, setRecepie] = useState(sampleRecepie) 
let selectRecepie = recepies.find((recepie)=> recepie.id === selectRecepieID)

  //++++++++++Local Storage Set Up++++++++++++++++++
  const myKey = "BrianHola";
  useEffect(()=>{
    let recepieJSON = localStorage.getItem(myKey) //we creat inside the localStorage an array with the name of the key
    if(recepieJSON != null){ //if the local storage is not equal to null then 
      setRecepie(JSON.parse(recepieJSON)) //add the localStorage array into the Recepies when
    }
    console.log(recepies)
  }, []) //the Page loads for the first time
  useEffect(()=>{
      localStorage.setItem(myKey, JSON.stringify(recepies))
      //Once the LocalStorage is created we insert/set the
  }, [recepies]) //recepie selected
  //+++++++++++ ^^^Local Storage Set up ^^^ +++++++++++++++++++++

  //++++++++ vv My Functions vv ++++++++++++++++++++
 let HandleSelectRecepie = (id)=>{
  setSelectedRepecie(id)
 }
 let HandleAddRecepie = () => {
  let newRecepie = {  // we are creating a funciton that adds a new recepie 
    id:uuidv4(),
    name:"",
    servings:0,
    cookTime:"",
    instructions:"",
    Ingridients:[
      {
        id:uuidv4(),
        name:"",
        amount:""
      }
    ] 
  }
  setSelectedRepecie(newRecepie.id)
  setRecepie([...recepies, newRecepie]) 
  
 }
 let HandleDeletRecepie = (id)=>{
  setRecepie(recepies.filter(rece =>{
    return rece.id !== id 
  }) 
  )
  if(selectRecepieID !=null && selectRecepieID === id){
    setSelectedRepecie(undefined)
  }
 }
 let HandleRecepieChange = (id, recepieArgu)=>{
  const newRecepies = [...recepies]  
  const index = newRecepies.findIndex(r=> r.id === id)
  newRecepies[index] = recepieArgu  
  setRecepie(newRecepies)                          
}

  //+++++++++++ vvv my Objects/Context vvv +++++++++++
 let myContext = { //Here we are inserting inside the object myContext
    HandleAddRecepie, // all our functions, so we can pass through components easily with 1 single Element Context
    HandleDeletRecepie,
    HandleSelectRecepie,
    HandleRecepieChange,
  }

  //+++++++++++++++ vvv return( JXS/components) vvv +++++++++++++++
  
  return (
    <div className="PositionElements">
     <TestContext.Provider value={myContext}> 
        <RecipeList MyReceta={recepies} />
        {selectRecepie && <EditRecepieList recepieSelected={selectRecepie}/>}
    </TestContext.Provider>
    </div>
    
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
let myO = {
  name:"Ho",
  age:10
}
let {name:FirstName} = myO
console.log(FirstName)
export default App;
