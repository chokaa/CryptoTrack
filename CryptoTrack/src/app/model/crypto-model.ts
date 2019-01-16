export class CryptoModel{
    name: string;
    short_name: string;
    quote: CryptoQuote;
    constructor(name: string, short_name: string, quote: CryptoQuote){
        this.name = name;
        this.short_name = short_name;
        this.quote = quote;
    }
}

export class CryptoQuote{
    price: number;
    percent_change_24h: number;
    positive: boolean;
    constructor(price: number, percent_change_24h: number){
        this.price = price;
        this.percent_change_24h = percent_change_24h;
        this.positive = percent_change_24h > 0;
    }
}

/*

circulating_supply: 17483850
cmc_rank: 1
date_added: "2013-04-28T00:00:00.000Z"
id: 1
last_updated: "2019-01-16T01:37:23.000Z"
max_supply: 21000000
name: "Bitcoin"
num_market_pairs: 6785
platform: null
quote:
USD: {price: 3635.47885036, volume_24h: 5559253202.49097, percent_change_1h: 0.179392, percent_change_24h: -2.09713, percent_change_7d: -10.2022, …}
__proto__: Object
slug: "bitcoin"
symbol: "BTC"
tags: ["mineable"]
total_supply: 17483850


1. Name of the cryptocurrency
2. Currency short name
3. Current $ value of the currency

4. % of change in the last 24h — if positive color the text green. if negative color
the text red

0.24 % 0.24 %

*/