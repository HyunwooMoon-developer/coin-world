import React, { createContext, useState } from "react";

export const CoinContext = createContext();

export const CoinContextProvider = props => {
    const [CoinList, setCoinList] = useState([
     'bitcoin',
     'ethereum',
     'tether',
     'dogecoin',
    
    ])
    return(
        <CoinContext.Provider value={{CoinList}}>
        {props.children}
        </CoinContext.Provider>
    )
}