import React, { useContext, useEffect, useState } from "react";
import Coingecko from "../../CoinGecko";
import { CoinContext } from "../../Context/CoinContext";
import Coin from "../Coin/Coin";

const CoinList = () => {
  const [coins, setCoins] = useState([]);
  const { CoinList, deleteCoin } = useContext(CoinContext);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await Coingecko.get("/coins/markets", {
        params: {
          vs_currency: "usd",
          ids: CoinList.join(","),
        },
      });
      setCoins(response.data);
      setIsLoading(false);
    };

    if (CoinList.length > 0) {
      fetchData();
    } else {
      setCoins([]);
    }
  }, [CoinList]);

  const renderCoins = () => {
    if (isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <ul className="coinlist list-group mt-2">
      <li className="d-flex justify-content-between align-items-center">
        <p>Coin</p>
        <p>Current Price</p>
        <p>Up & Down</p>
      </li>
        {coins.map((coin) => {
          return (
            <Coin
              id={coin.id}
              key={coin.id}
              coin={coin}
              deleteCoin={deleteCoin}
            />
          );
        })}
      </ul>
    );
  };

  return <div>{renderCoins()}</div>;
};

export default CoinList;
