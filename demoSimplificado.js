
//IMPORTANTE SEGUIR ESTE CODIGO CON LA IMAGEN ADJUNTADA! (tocar alt+z para softwrapear)
//ESTE ES UN MODELO NO FUNCIONAL, ESTA SIMPLIFICADO, ES PARA APRENDER LOS PASOS, DESPUES NO LO VAN A HACER NUNCA MAS EN UN SOLO ARCHIVO Y DE ESTA FORMA. LO VAN A HACER DE OTRA MEJOR PERO CON LOS MISMOS PASOS. SI APRENDEN ESTO APRENDEN TODO REDUX

const redux = require('redux');//importo redux

///////////////PASO 1) CREO EL REDUCER (mirar la imagen) /////////////////////////////////////////
const ADD_TODO = 'ADD_TODO'//type fijado en una variable para no liarla
const REMOVE_TODO = 'REMOVE_TODO';//otro type fijado en una variable para no liarla


const initialState = { //estado inicial
  todos: [],
  otroTodos:[]
}
//Le saque el switch porque no se usa y no me gusta
function rootReducer(state = initialState, action) { //solo si state es nulo (es decir la primera vez) se crea con el initialState

  //lo desarmo para usarlo de forma mas practica (puedo hacerlo destructuring tambien)
  let type=action.type
  let payload=action.payload
  
      if (type === ACTION_ALGO) { 
          return {
              ...state, algo:payload
          }
          //Lo que retorne se va a comparar con lo que este. Si queres mantener lo anteror haces destructuring con los 3 puntitos, pones una coma y pisas el elemento del estado que queres cambiar (en este caso cambias -algo-, sin modificar -algo2-)
      }
  
  }
  
//////////////////ACA TERMINO DE CREAR EL REDUCER/////////////////////////////////////////



///////////////PASO 2) CREO EL STORE CON EL REDUCER DE ARRIBA (mirar la imagen) /////////////////////////////////////
const store = redux.createStore(rootReducer);//crea un store avisnado que reducer usa
///////////////ACA TERMINO DE CREAR EL STORE////////////////////////////////////////////


///////////////PASO 3) CREO LAS ACTION CREATOR (mirar la imagen) /////////////////////////////////////
function addTodo(text) {
  return {
    type: ADD_TODO,
    payload: text
  }
}

function removeTodo(index) {
  return {
    type: REMOVE_TODO,
    payload: index
  }
}
///////////////ACA TERMINO DE HACER LAS ACTION CREATOR////////////////////////////////////////////




///////////////PASO 4) INVOCO AL DISPATCHER CON UNA ACTION _NO_ CON LA ACTION CREATOR, LA INVOCO CON UN OBJETO! (mirar la imagen) ////////////////////////////////
store.dispatch(addTodo('Comprar pan'))
store.dispatch(addTodo('Correr'))

store.dispatch(removeTodo(1))
///////////////ACA TERMINO DE INVOCARLO, Y YA MODIFIQUE EL ESTADO////////////////////////////////


console.log(store.getState());