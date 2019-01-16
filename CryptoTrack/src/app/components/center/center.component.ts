import { Component, OnInit } from '@angular/core';
import { CryptoCallService } from 'src/app/services/crypto-call.service';
import { CryptoModel, CryptoQuote } from 'src/app/model/crypto-model';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.scss']
})
export class CenterComponent implements OnInit {

  cryptoCurrencies: CryptoModel[];

  constructor(private cryptoService: CryptoCallService) {
    this.cryptoCurrencies = [];  
    this.cryptoService.call().subscribe(value=>{
      value.data.forEach( (element: any) => {
        const newQuote = new CryptoQuote(element.quote.USD.price, element.quote.USD.percent_change_24h);
        this.cryptoCurrencies.push(new CryptoModel(element.name,element.symbol, newQuote));
      });
    })
  }
  ngOnInit() {
  }

}
