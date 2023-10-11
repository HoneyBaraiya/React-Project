import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {

  const [loading,setLoading]=useState(true);
  const [searchterm,setSearchterm]=useState('a');
  const [cocktail,setCocktail]=useState([]);

  const fetchDrinks=async()=>{
    setLoading(true)
    try{
        const response=await fetch(`${url}${searchterm}`)
        const data=await response.json();
        const {drinks}=data;
        if(drinks)
        {
          const newDrink=drinks.map((item)=>{
              const {idDrink,strDrink,strDrinkThumb,strAlcoholic,strGlass}=item;
              return {id:idDrink,name:strDrink,image:strDrinkThumb,info:strAlcoholic, glass:strGlass}
          })
          setCocktail(newDrink);
        }
        else
         { setCocktail([]);}
        setLoading(false)
    }
    catch(err){
      setLoading(false) 
      console.error(err);
    }
  }

  useEffect(()=>{
    fetchDrinks();
  },[searchterm])
  
  return <AppContext.Provider value={{loading,cocktail,setSearchterm}}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }

