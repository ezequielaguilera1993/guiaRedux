  
import { ACTION_ALGO } from "../actions/names" //Importa EL NOMBRE de un type de action

const ACTION_ALGO="ACTION_ALGO" 

const initialState = {//creo mi estado inicial
    algo:"algo",
    algo2:"algo2",
}


//Al reducer le llega la action(ES UN OBJETO) gracias al DISPATCHER(FUNCION), la action tiene como propiedades type y un payload. El type le va a indicar QUE hacer al reducer. El payload CON QUE tiene que hacerlo
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

export default rootReducer;//exportas el reducer

