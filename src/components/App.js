import React, {useState, useEffect} from 'react';
import '../css/app.css';
import RecipeList from './recipeList'
import uuidv4 from 'uuid/v4' // this is to create a unique key = {}
import EditRecepieList from './EditRecepieList'


export let TestContext = React.createContext() //createContext first
//Then import {useContext} then inside useContext use the variabel that has CreateContext = useContext(TestContext)

function App() {
 let [selectRecepieID, setSelectedRepecie] = useState()
 let [recepies, setRecepie] = useState(sampleRecepie) //useState wraps its value inside an object! 
//Remember setRecepie function can be use multiple times! :D
let selectRecepie = recepies.find((recepie)=> recepie.id === selectRecepieID)
//we want to find if the recepie.id is equal to the selectedRecepieiD
//if it finds it we will get the hole recepie!
//React doesnt allow you to change the state without using setRecepie!!! 
  //++++++++++ ^^^ useStates ^^^ +++++++++++++++++++++++++++

  //++++++++++Local Storage Set Up++++++++++++++++++
  let myKey = "BrianHola"
  useEffect(()=>{
    let recepieJSON = localStorage.getItem(myKey) //when we get an item we are creating an Array
    if(recepieJSON != null){ //if the array doesnt have an value(wich it does) then
      setRecepie(JSON.parse(recepieJSON)) //we wrap the recepie inside the array created by the localStorage
    }
    console.log(recepieJSON)
  }, [])
  useEffect(()=>{
      localStorage.setItem(myKey, JSON.stringify(recepies))
  }, [recepies])
  //+++++++++++ ^^^Local Storage Set up ^^^ +++++++++++++++++++++

  //++++++++ vv My Functions vv ++++++++++++++++++++
 let HandleSelectRecepie = (id)=>{
  setSelectedRepecie(id)
 }
 let HandleAddRecepie = () => {
  let newRecepie = {  // we are creating a funciton that adds a new recepie 
    id:uuidv4(),
    name:"new",
    servings:1,
    cookTime:"1:00",
    instructions:"instructions",
    Ingridients:[
      {
        id:uuidv4(),
        name:"name",
        amount:"3 tbs"
      }
    ] 
  }
  setRecepie([...recepies, newRecepie]) 
  //This above means that we are adding a new recepie in the end of the already existing recepies and creating a brand new array with both
 }
 let HandleDeletRecepie = (id)=>{
  setRecepie(recepies.filter(rece =>{
    return rece.id !== id // if you use multiple lines inside a function use always return(Not needed if you just writing 1 line of function code )
  }) // we are filtering into a new array, all the recepies expect the one that we clicked ID)
  )
 }
 let HandleRecepieChange = (id, recepieArgu)=>{
  const newRecepies = [...recepieArgu]  //React doesnt allow you to change the state without using setRecepie! thats why we are creating a new array with the properties of our recepie State
  const index = newRecepies.findIndex(r=> r.id === id)
  newRecepies[index] = recepieArgu //newRecepies[index] = We are going to select with Recepie (searching with the ID)
                                   //recepieArgu = we are going to insert the "new" values of that recepie
}

  //+++++++++++ vvv my Objects vvv +++++++++++
 let myContext = { //Here we are inserting inside the object myContext
    HandleAddRecepie, // all our functions, so we can pass through components easily with 1 single Element Context
    HandleDeletRecepie,
    HandleSelectRecepie,
    HandleRecepieChange
  }

  //+++++++++++++++ vvv return( JXS/components) vvv +++++++++++++++
  //Inside the TestContext we are inserting the value of myContext wich are the 2 functions that delet and add a recepie
  //After that we are destructuring the TestContext and accessing the value (the 2 functions)
  return (
    <div className="PositionElements">
     <TestContext.Provider value={myContext}> 
        <RecipeList MyReceta={recepies} />
        {selectRecepie && <EditRecepieList recepieSelected={selectRecepie}/>} {/*&& = both MUST to be true in order to have a true result
                                                                                || = one MUST to be true in order to have true result */}
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
export default App;
//rfc to creat componen function


// let selectRepecie = recepie.find(recepie => recepie.id === selectedRecepiedId) //this is going to give you the hole recepie with the ID
// function RecepieSelect(id){
//   setSelectedRecepie(id)
// }

// let {id} = props

// onClick={() => RecepieSelect(id)} //this is going just to give you the id