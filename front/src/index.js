import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import App from './components/App/App';
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const preloadedState = window.localStorage.getItem('state') || '{"isAuthenticated": false}'

const store = createStore(
  (state, action) => {
    switch (action.type) {
      case 'AUT_SUCCESS':
        return {
          ...state, isAuthenticated: true
        }
      case 'LOGOUT':
        return {
          ...state, isAuthenticated: false
        }
      case 'LOAD_QUESTION':
        return {...state, question: [...state.question, action.payload]}  /////???
      default: return state;
    }
  },
  JSON.parse(preloadedState),
  composeWithDevTools()
)

store.subscribe(() => {
  const state = store.getState()
  window.localStorage.setItem('state', JSON.stringify(state))
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
);

