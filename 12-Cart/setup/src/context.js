import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()


const initialState={
  loading:false,
  cart:cartItems,
  total:0,
  amount:0
}

const AppProvider = ({ children }) => {
  const [state,dispatch]=useReducer(reducer,initialState);

  const fetchData=async()=>{
    dispatch({type:"LOADING"});
    const response=await fetch(url);
    const data=await response.json();
    dispatch({type:"DISPLAY_ITEM",payload:data});
  }

  useEffect(()=>{
    fetchData()
  },[]);

  const clearcart=()=>{
    dispatch({type:"CLEAR_CART"});
  }

  const removeItem=(id)=>{
    dispatch({type:"REMOVE",payload:id})
  }

  const increaseQty=(id)=>{
    dispatch({type:"INCREASEQTY",payload:id})
  }
  const descreaseQty=(id)=>{
    dispatch({type:"DECREASEQTY",payload:id})
  }
  useEffect(()=>{dispatch({type:'GET_TOTAL'})},[state.cart])
  return (
    <AppContext.Provider
      value={{
        ...state, 
        clearcart,
        removeItem,
        increaseQty,
        descreaseQty
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
