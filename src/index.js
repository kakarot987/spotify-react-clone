import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import rootReducer from './store/reducers/rootReducer'; // Import your root reducer
import { Provider } from 'react-redux';
import {legacy_createStore as createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';


const store = createStore(rootReducer, applyMiddleware(thunk));
const rootElement = 
document.getElementById('root');
const root = 
createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
)
// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// );
//   document.getElementById('root')
// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
