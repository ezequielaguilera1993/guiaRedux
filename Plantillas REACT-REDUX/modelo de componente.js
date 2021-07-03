import React, { Component, useState } from "react";
import { connect } from "react-redux";//esto es para conectarlo con redux de forma eficiente
import {algunComponente} from "./components/algunComponente"//si usa a otro componente lo importamos asi
import { Link } from 'react-router-dom';//si precisa links para el routing
import { algunaActionCreator } from "../../actions"//importa la action, es decir UNA FUNCION
import style from './modelo.module.css'; //asi se importan los estilos

//4 ERRORES EXTREMADAMENTE FRECUENTES
/*
1) ERROR: OLVIDARTE DE PASARLE EL ACTION CREATOR AL CONECT
2) ERROR: NO PASARLE LA ACTION
¿POR QUÉ PASAN LOS ERRORES 1 Y 2?
EL ACTION CREATOR IMPORTADO ES LA FUNCION QUE DEFINIMOS EN ACTIONS. INVOCADA GENERA EL OBJETO
CON EL TYPE Y PAYLOAD. PERO ASI NO LA USAMOS!!, AL PASARLA EN EL CONNECT, ESTE LA ENVUELVE EN EL DISPATCHER. LA FUNCION QUE LE LLEGARA POR PROPS AL COMPONENETE ES LA ACTION CREATOR YA ENVUELTA EN EL DISPATCHER!! SI NO LA PASAS USA LA ACTION CREATOR SIN DISPATCHER!!

3) ERROR: NO PASARLE A LO ULTIMO DEL CONNECT EL COMPONENTE (NO SE ENTERA DE A QUE TIENE QUE DARLE LAS PROPS GENERADAS)

4) ERROR: NO PASAR ENTRE LLAVES Y SEPARADOS POR COMAS LAS ACTION CREATOR EN EL CONNECT. El connect espera un objeto, y esa sus elementos, que van a ser ACTION CREATOR, si se la pasas asi nomas porque es una sola se rompe.

5) ERROR: PASAR ENTRE LLAVES PERO LA FUNCION INVOCADA, NO QUIERE EL OBJETO QUIERE LA FUNCION!
*/

 function componente ({algo, actionAlgo}){
//El algo que le llega es lo que definiste en el mapeoState.

//OJO ACA, OJO ACA, OJO ACA, OJO ACA, OJO ACA, OJO ACA, OJO ACA, OJO ACA, OJO ACA, OJO ACA
//La actionAlgo es un dispatcher que se invoca con esa action creator con lo que le pases. Explicado mas simple, la actionCreator, gracias al connect esta envuelta en el dispatcher. Es decir que si haces actionAlgo(tuPayload) aca actualiza el estado. Si lo haces arriba de esta funcion, lo unico que harias es crear un objeto ACTION y ya.
////OJO ACA, OJO ACA, OJO ACA, OJO ACA, OJO ACA, OJO ACA, OJO ACA, OJO ACA//
let miPayload={elemento:[1,2,3,4]}
actionAlgo(miPayload) //le envio al reducer este objeto que tiene el type que le pusiste, y como payload tendra -miPayload-

    return(<div>Pues si lo que sea, este es mi algo: {algo}</div>)

    } 


///ESTO SOLO SI TIENE QUE __LEER__ EL ESTADO
     function mapeoState(state) { //esta funcion invocada en el connect tiene acceso al estado
    return {
        algo:state.algo
    }
    //retorna este objeto, y cada elemento de este objeto se lo pasa como prop al componente
  }

  //CONNECT (primerArgumento:acceso al estado, segundoArgumento: edicion)
  //EL SEGUNDO ARGUMENTO CON LA ACTION CREATOR SOLO SI TIENE QUE MODIFICAR AL ESTADO
  export default connect(mapeoState, {actionAlgo})(componente)
