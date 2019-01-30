import { Component } from '@angular/core';

import { getData } from '../model/data.js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', '../../node_modules/wijmo/styles/wijmo.scss'
]
})
export class AppComponent {
  data = getData();
  onload = function() {

    // create some random data
    var countries = 'US,Germany,UK,Japan,Italy,Greece'.split(',');
    var products = 'Piano,Violin,Flute,Guitar,Cello'.split(',');
    var data = [];
    for (var i = 0; i < 10000; i++) {
      data.push({
        id: i,
        country: countries[i % countries.length],
        product: products[i % products.length],
        sales: Math.random() * 10000,
        expenses: Math.random() * 5000
      });
    }
  }

  showClicked(item){
      alert('add someting to ' + JSON.stringify(item));
  }
}