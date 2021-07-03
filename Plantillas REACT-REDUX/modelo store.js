import { createStore, applyMiddleware, compose } from "redux";
//createStore:metodo que al invocarlo genera un store
//applyMiddleware es para que ande thunk (llamadas asincronicas a api)
//compose para la Redux DevTools, es nada mas para que puedas usar el plugin en el navegador

import thunk from "redux-thunk"; //para llamadas asincronas
import reducer from '../Reducer/'//importa el reducer que CREAMOS NOSOTROS

//Esto es lo que importamos arriba, es para que ande la Redux DevTools ↓
const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

// Creacion Store 💗 ↓
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
//recibe a reducer como primer argumento. El reducer que creamos nosotros.

export default store