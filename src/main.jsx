 

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Store } from './Redux/Store';  
import Form from '../src/Form';  

ReactDOM.render(
  <Provider store={ Store}>
    <Form />
  </Provider>,
  document.getElementById('root')
);
