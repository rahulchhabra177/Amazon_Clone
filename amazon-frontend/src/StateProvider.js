import React,{createContext,useContext,useReducer} from 'react';
//prepare a Data Layer
export const StateContext =createContext();
//Wrap up our Data latyer
const StateProvider=({reducer,initialState,children})=>(
	<StateContext.Provider value={useReducer(reducer,initialState)}>
	{children}
	</StateContext.Provider>


	);
	export const useStateValue =()=>useContext(StateContext);

export default StateProvider;