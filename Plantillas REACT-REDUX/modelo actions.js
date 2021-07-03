
import { TYPE_NAME } from "./names" //importa algun NOMBRE de type



export function algunaActionCreator(payload) { //Lo unico que hace es generar un objeto con un type y un payload. 
    //Este objeto generado el dispatcher se lo pasa al reducer. Y el reducer hace su magia
    return {
        type: TYPE_NAME,
        payload
    }
}


export function algunaOtroActionCreator(payload) { //Lo unico que hace es generar un objeto con un type y un payload. 
    //Este objeto generado el dispatcher se lo pasa al reducer. Y el reducer hace su magia
    return {
        type: TYPE_NAME,
        payload
    }
}


/* modelo para poner en el archivo names.js
export const TYPE_NAME="TYPE_NAME"
*/
