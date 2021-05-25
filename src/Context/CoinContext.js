import React, { createContext, useEffect, useState } from "react";

export const CoinContext = createContext();

export const CoinContextProvider = (props) => {
  const localSavedData = localStorage.getItem("CoinList");

  const [CoinList, setCoinList] = useState([
    localSavedData !== null
      ? localSavedData.split(",")
      : // localStorage.getItem("watchList").split(",") ||
        "bitcoin",
    "ethereum",
    "tether",
    "dogecoin",
  ]);

  useEffect(() => {
    localStorage.setItem("CoinList", CoinList);
  }, [CoinList]);

  const deleteCoin = (coin) => {
    setCoinList(
      CoinList.filter((el) => {
        return el !== coin;
      })
    );
  };

  const addCoin = (coin) => {
    if (CoinList.indexOf(coin) === -1) {
      setCoinList([...CoinList, coin]);
    }
  };

  const resetCoin = () => {
    setCoinList(["bitcoin", "ethereum", "tether", "dogecoin"]);
  };

  return (
    <CoinContext.Provider value={{ CoinList, deleteCoin, addCoin, resetCoin }}>
      {props.children}
    </CoinContext.Provider>
  );
};
