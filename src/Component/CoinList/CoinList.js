import React, { useContext, useEffect, useState } from "react";
import Coingecko from "../../CoinGecko";
import { CoinContext } from "../../Context/CoinContext";
import Coin from "../Coin/Coin";

const CoinList = () => {
  const [coins, setCoins] = useState([]);
  const { CoinList } = useContext(CoinContext);
  const [isLoading, setIsLoading] = useState(false);
  console.log(CoinList);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await Coingecko.get("/coins/markets/", {
        params: {
          vs_currency: "usd",
          ids: CoinList.join(","),
        },
      });
      setCoins(response.data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const renderCoins = () => {
    if (isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <ul className="coinlist list-group mt-2">
        {coins.map((coin) => {
          return <Coin key={coin.id} coin={coin} />;
        })}
      </ul>
    );
  };

  return <div>{renderCoins()}</div>;
};

export default CoinList;
