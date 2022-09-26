import { createContext, useContext, useReducer } from 'react';

export const StateContext = createContext();

export const StateProvider = ({ children, initialState, reducer }) => {
<StateContext.Provider value={useReducer}>
  { children }
</StateContext.Provider>
}

export const useStateProvider = () => useContext(StateContext);