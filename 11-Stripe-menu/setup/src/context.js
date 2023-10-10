import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext=React.createContext();

export const AppProvider=({children})=>{
    const [isOpenSidebar,setSidebar]=useState(false);
    const [isOpenSubmenu,setSubmenu]=useState(false);
    const [location,setLocation]=useState({})
    const [page,setPage]=useState({page:'',links:[]});

    const openSidebar=()=>{
        setSidebar(true)
    }
    const closeSidebar=()=>{
        setSidebar(false);
    }
    const openSubmenu=(text,coordinates)=>{
        const page=sublinks.find((link)=>link.page ===text);
        setPage(page);
        setLocation(coordinates);
        setSubmenu(true)
    }
    const closeSubmenu=()=>{
        setSubmenu(false);
    }
    return(
        <AppContext.Provider value={{isOpenSidebar,openSidebar,closeSidebar,isOpenSubmenu,openSubmenu,closeSubmenu,location,page}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext=()=>{
    return useContext(AppContext);
}
