import React from 'react'
import TradingViewWidget from 'react-tradingview-widget';

const TradingView = () => {
    return (
        <div className="chartContent">
            <TradingViewWidget symbol="NASDAQ:AAPL" autosize />
        </div>
    )
}

export default TradingView;
