import React from 'react';
import AddCoin from '../../Component/AddCoin/AddCoin';
import CoinList from '../../Component/CoinList/CoinList';

const CoinSummaryPage = () => {
    return (
        <div className="coinsummary shadow border p-2 rounded mt-2 bg-light">
            <AddCoin />
            <CoinList />
        </div>
    );
};

export default CoinSummaryPage;