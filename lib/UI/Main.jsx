// import App from 'next/app
'use client'
import Image from 'next/image'
import App from '../UI/App'
import { Provider } from 'react-redux'

import { createStore } from 'redux';
export default function Main() {

  const initialState = {
    notes: [],
    currentNoteId: null
  };
  
  // Define a reducer function to handle actions
  function reducer(state = initialState, action) {
    switch (action.type) {
      case 'SET_NOTES':
        return {
          ...state,
          notes: action.notes
        };
      case 'SET_CURRENT_NOTE_ID':
        return {
          ...state,
          currentNoteId: action.currentNoteId
        };
      default:
        return state;
    }
  }
  
  // Create a Redux store
  const store = createStore(reducer);
  return (
    <Provider store={store}>
      <App/>
      </Provider>
  )
}
