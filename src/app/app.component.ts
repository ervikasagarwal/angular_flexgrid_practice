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
  showform = false;
  newComp = {
    name:null
  }
  showClicked(item){
      console.log("item",item );
      this.showform = true;
     // alert('add someting to ' + JSON.stringify(item.row.index));
  }
  cellEditEndingHandler(flexEdit){
    alert("hi"+"flexEdit");
    console.log("flexEdit", flexEdit)
  }
  handleFormSubmit(formDetails){
    this.showform = false;
    alert("form submitted"+this.newComp.name);
    console.log(formDetails)
  }
}