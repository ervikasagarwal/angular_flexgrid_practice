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
  showClicked(item){
      console.log("item",item );
      alert('add someting to ' + JSON.stringify(item.row.index));
  }
  cellEditEndingHandler(flexEdit){
    alert("hi"+"flexEdit");
    console.log("flexEdit", flexEdit)
  }
}