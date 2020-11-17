var rp = require('request-promise').defaults({json: true})

 //const api_root = 'http://localhost:9801';
const api_root = 'https://nuts.ella.finance';
const history = {}

export default {
	history: history,

    getBars: function(symbolInfo, resolution, from, to, first, limit) {
		var split_symbol = symbolInfo.name.split(/[:/]/);
		var ticker = symbolInfo.ticker.split(/[:/]/);
			const url = resolution === 'D' ? '/data/histoday' : resolution >= 60 ? '/data/histohour' : '/data/histominute'
			
        return rp({
                url: api_root+'/api/trade/charts/'+ticker[2]+'/'+from+'/'+to+'',
                
            })
            .then(data => {
                
				if (data.Response && data.Response === 'Error') {
					// console.log('CryptoCompare API error:',data.Message)
					return []
				}
				if (data.Data.length) {
					// console.log(`Actually returned: ${new Date(data.TimeFrom * 1000).toISOString()} - ${new Date(data.TimeTo * 1000).toISOString()}`)
					var bars = data.Data.map(el => {
						return {
							time: el.grp_id, //TradingView requires bar time in ms
							low: parseFloat(el.low),
							high: parseFloat(el.high),
							open: parseFloat(el.opening),
							close: parseFloat(el.closed),
							volume: parseFloat(el.vol)
						}
					})
						if (first) {
							var lastBar = bars[bars.length - 1]
							history[symbolInfo.name] = {lastBar: lastBar}
						}
						
					return bars
				} else {
					return []
				}
			})
}
}