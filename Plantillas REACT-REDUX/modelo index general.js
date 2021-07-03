import React from 'react'; //importa react
import ReactDOM from 'react-dom';//importa ReactDOM, sirve para comunicarse con el DOM. 
import { Provider } from 'react-redux';//Sirve para proveer el estado global de redux a los componentes de React
import {BrowserRouter} from 'react-router-dom' //para manejar rutas
import App from './App';//importa el app con todo
import './index.css'; //importa la hoja de estilos
import store from './Store'//importa la store creada en otro lado

ReactDOM.render( //La funcion render recibe dos argumentos, QUE renderizo y DONDE renderizo
  <Provider store={store}>{/*Le paso store a todo para que tenga acceso a las variables globales */}
    <BrowserRouter>{/*Lo envuelvo para poder manejar las rutas */}
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);