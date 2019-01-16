import { HttpHeaders } from "@angular/common/http";

export class Constants{

    public static readonly API = 
        { 
            coinmarket_url: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest'
        };
    public static readonly httpHeader = new HttpHeaders({ 
        'Access-Control-Allow-Origin':'*', 
        'X-CMC_PRO_API_KEY': '42466717-17ca-426f-81b2-029ebca508ff' 
    });
}