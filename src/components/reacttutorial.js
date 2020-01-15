// Important imports in every Component 
import React, {component} from './react' // When we want to use classes with components
import React, { useState } from 'react' //When we want to use functions with hooks


/************************************Tips **************************** */
// Only use normal names in lowercase when creating a react folder. (Without any special letters or spaces or anything just plain normal lowercase!)
// package-lock.json (has all the configurations for your different moduels!)
// package.json (Has the configurations for your react app and commants aviliable)
// JSX = Html used in Javascript file. But some stuff can be name different like class="" is className="" because class is reserved to class constructors
// When importing a function dont use () in the end

// **************** React Commands **************************
// In order to patch react in your folder use the command: npx create-react-app .  (important to use the dot = only install in this folder)
// npm start = activates a inbuild npm "live server"
// npm run build = compiles your files to a smaller size so it runs faster (Do only this when you are finish with your product)
// npm run eject = when you want to go to the "back-end" of react in other words pure react in pure vanilla javascript! and modifiy how react works! :D:D:D::D:D


// ********************** React *********************
// use shortcut rfc to create a react function component 
// select everyting insitead an object with 3dots {...NameOfObject} same with arrays just use []
// select specific propertie by destructuring let {nameOfProperties} = Props

//+++++++++++++++++Class Component React++++++++++++++++++++++++
class mycompo extends component{
    constructor(props){ // in order to add an "eventlistener" in react we use States and it always has a constructor with argument of props and a super of props
         super(props)

        this.state = {
            count: props.Counter
        }
     }
   
   
    render(){ // this render function is to display in stuff in our browser
        return( // As you know every function needs to have a return but instead of using return in the end of our code, in react we wrapp it around a return method, everything inside is going to be displayed
            <> //this is one way to collect all your info inside 1 div
            <div> or use a normal div
                <button onClick={()=> this.myFunction(-1)}></button>  you create a function as follow 
                <span>{this.state.count}</span> Props are use as arguments like in a function
                always write this.prop.NameOfTheArgument
                Once you create a state you can refer it to that object instead of the props
                Since the state already contains the props
            </div> 
            </>
        )
    }
    myFunction(amount){ // Here we create our funciton and add the this.setState wich means that its going to overwriter the current object state.count
        this.setState({count: this.state.count + amount})
    //we select with stat we want to change by simpli writing it as its in the state object and writing what we want instead
        //if you want to use the previous setState and overwrite over that "new" state use the funciton prevState
        this.setState(prevState=>{ // inster the argument prevState
            return({ count: prevState.count + amount}) 
            // and use it to call the previous object 
        })
    }
}
// In order to display anything on the browser always use render( ){ return() }
//function components can only return one thing, if you want to return multiple things use fragments wich are empty brackets <> </> but first use () after return

//Once created your component on a individual js page you need to add it to the main APP.js page
//By importing it and just inster it inside like this return( <nameComponent />)
import React from 'react';
import Libro from './NewComponent'

function App() {
  return (
    <Libro Counter={4}/> //Here you can define the props real value that you want to insert
  )
}

export default App;

//++++++++++++++++++++++++++++++ Function (Hooks, useState) Component React +++++++++++++++++++++++++++
import React, { useState } from 'react' // with hooks we can create our component inside a function and use useState from react
let MyPersona = {
    name:"Brian",
    age:23,
    length:173,
    lastName:"Veliz"
}

export default function empleados(Props){ //Props are arguments inside a function that holds the value that you want to transfer through components. In order word and props = obejct that cotains the values you want to transfer to other components
 //Props always need to be destructure and there are 2 ways one we can see above and one in the second function
 //Props can be deconstructing with {nameOfThePropertie} and insert the propertie that you want to use 
    return(
        <ListadeEmpleados Personas={MyPersona} /> //Props are passed through Componenets
    )
}

export default function ListadeEmpleados(Personas) { 
 let {name, age, lastName} = PersonasProps //Second Way to destructure a prop
 let [value, ConfigureTheValue] = useState(age) //useState = we manipulate the state of the value inserted inside (here)
 //the value inside the () gets transfered in the first index and the second index are a function that is going to control that value
 //You can use multiple useStates!
 return (
        <div>
            <h1>{name}</h1> in order to insert the prop we need to insert inside {nameOfProp}
            <h2>{lastName}</h2> 
            <h3 onClick={()=>{ //when creating an event first creat a function that is going to be the event function
                //then use the useState method() and inside that use another function that is going to controll the value of useState
                ConfigureTheValue((previousValue)=>previousValue + age) //previousVale = currentValueUpdated = the first index of the useState
            //we create a function that is going to take inacount of the previous stateValue(if we have many useStates)
               AnotherState((TestState)=> TestState + name) //just like this we can insert a new useState
            }}>{age}</h3>
        </div>
    )
}

// ++++++++++++++++++ Context ++++++++++++++++++++++++++++
//in order to use Context you neeed to use the react.CreateContext(Insert Default value if wanted) method and export it
//Context are basicaly "props" pre-made settings but the difference is that they are locate globaly and can be insert in any deep nested component by simply using conext hooks
export let ThemeContext = React.createContext()// we insert it inside the variable and export it
let myNombre = {
    name:"Brian",
    LastName:"Veliz"
}

function HookComponent (){
    //we wrap our component with the createContext variable.Provider 
    //And insert the value that we want to pass through the component (in this case the object myNombre)
    return(
        <ThemeContext.Provider value={myNombre}> 
            <myComponent/>
        </ThemeContext.Provider>
    )   
}
//Part 2 +++++++++++++++++++ Insert the Context inside our nested component ++++++++++++++
//We import useContext wich allow us to use context in our component
import React, {useContext} from 'react'

//We also import the createContext() method that we stored in the variable ThemeContext
import {ThemeContext} from './App'

// Now we Combine both useContext(Method) and our createdContext variable and store it inside a new variable
const myNombre = useContext(ThemeContext)  //myNombre = Object myNombre with the name and LastName properties
export default function myComponent(){ //we are inside the myComponent function
    return(
        <div>  {/*Now we can access the object like a normal object and insert it inside our JSX with {}*/}
            <h1>mi nombre es {myNombre.name} y mi apellido es {myNombre.LastName}</h1>
        </div>
    )
}
//+++++++++++++++++ useEffect +++++++++++++++++++++
import React, {useState, useEffect} from 'react'

export default function reacttutorial() {
    let [numero, setNumero] = useState(0)
    
    useEffect(()=>{ //useEfftect has 2 parameters one is for a functions and the other one is when that function is going to be activated
        console.log("Print this Kappa Kappuchino Pepperonino!")
    }, [numeroBtn]) //the second index(numero) means that every time the button numero is going to be clicked its going to print the console above
    //In other words you can insert inside the array which conditions its going to run the function above. If you insert empty array its going
    //to active the function only once (when the page refresh)
    return (
        <div>
            <button onClick={()=>{setNumero(prevValue => prevValue + 1)}}>{numeroBtn}</button>
        </div>
    )
}
// +++++++++++ localStorage.getItem/setItem ++++++++++++++++++++++++
// we are going use LocaStorage inside useEffect
import React from 'react'

export default function reacttutorial() {
    let [nameItem, setName] = useState(myNombre)
    let myNombre = { // here we have the object we want to store and insert it inside a useState (add a state)
        Name:"Brian",
        LastName:"Veliz"
    }
    let my_Key = "BrianKey" // we create a "key"
    useEffect(()=>{
        let myNameJSON = localStorage.getItem(my_Key)//localStore.getItem(insertKey) insert a key name inside the LocaStorage
        if(myNameJSON != null){ //if the array is not empty do this:
            setName(JSON.parse(myNameJSON))// we convert that key inside the LocaStorage into an Object
            //the localStore object key wrapps around the nameItem properties
        }  //result: let BrianKey = {nameItem}
    }, []) // at the same time we using this effect only once the page refresh (Notice the empty array(second index))
    
    useEffect(()=>{
        localStorage.setItem(my_Key, JSON.stringify(nameItem)) //now we update the Briankey Array 
    }, [nameItem])//everytime the nameItem is used/state changes
    

    //in other Words: we create an empty object when the site starts first time, then everytime an element state changes we insert
    //the new information into that object and now when we refresh the page only that object containing that information will be displayed
}













