import 'react-app-polyfill/ie11'; // For IE 11 support
import 'react-app-polyfill/stable';
import './polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { icons } from './assets/icons';
import { Provider } from 'react-redux';
import store from './store/store';
import ReduxToastr from 'react-redux-toastr';

React.icons = icons

ReactDOM.render(
  <Provider store={store()}>
    <App/>
    <ReduxToastr timeOut={3000} newestOnTop={false} preventDuplicates 
        position="top-right" transitionIn="fadeIn" transitionOut="fadeOut" 
        progressBar closeOnToastrClick={false} />
  </Provider>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();