/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useState } from "react";
import { CoinContext } from "../../Context/CoinContext";

const AddCoin = () => {
  const [isActive, setIsActive] = useState(false);
  const { addCoin, resetCoin } = useContext(CoinContext);

  const availableCoins = [
    "bitcoin",
    "bitcoin-cash",
    "cardano",
    "dogecoin",
    "eos",
    "ethereum",
    "litecoin",
    "okb",
    "ripple",
    "tether",
    "tezos",
  ];

  const handleClick = (coin) => {
    addCoin(coin);
    setIsActive(false);
  };

  const resetClick = () => {
    resetCoin();
  };

  return (
    <div className="d-flex justify-content-between">
      <div className="dropdown multiple">
        <button
          onClick={() => setIsActive(!isActive)}
          className="btn btn-primary dropdown-toggle"
          type="button"
        >
          Add Coin
        </button>
        <div className={isActive ? "dropdown-menu show" : "dropdown-menu"}>
          {availableCoins.map((el) => {
            return (
              <a
                href="#"
                onClick={() => handleClick(el)}
                key={el}
                className="dropdown-item"
              >
                {el}
              </a>
            );
          })}
        </div>
      </div>
      <div>
        <button onClick={resetClick} className="btn btn-success">
          Reset Coins
        </button>
      </div>
    </div>
  );
};

export default AddCoin;
