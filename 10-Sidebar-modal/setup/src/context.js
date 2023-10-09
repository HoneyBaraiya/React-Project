import React, { useState, useContext } from 'react'

const AppContext=React.createContext();

const AppProvider=({children})=>{
    const [isOpenSidebar,setSidebar]=useState(false);
    const [isOpenModel,setModel]=useState(false);

    const openSidebar=()=>{
        setSidebar(true);
    }
    const closeSidebar=()=>{
        setSidebar(false);
    }
    const openModel=()=>{
        setModel(true);
    }
    const closeModel=()=>{
        setModel(false);
    }
    return(
        <AppContext.Provider value={{isOpenModel,isOpenSidebar,openSidebar,closeSidebar,openModel,closeModel}}>{children}</AppContext.Provider>
    )
}
export {AppContext,AppProvider};

