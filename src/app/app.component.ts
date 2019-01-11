import { Component } from '@angular/core';

// import * as wjcGridDetail from 'wijmo/wijmo.grid.detail';

// import * as wjcCore from 'wijmo/wijmo';
// import * as wjcGrid from 'wijmo/wijmo.grid';
import { getData } from '../model/data.js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', '../../node_modules/wijmo/styles/wijmo.scss'
]
})
export class AppComponent {
  data = getData();
}
