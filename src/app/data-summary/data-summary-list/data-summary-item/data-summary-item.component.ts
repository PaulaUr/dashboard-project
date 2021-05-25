import { Component, Input, OnInit } from '@angular/core';
import {Data} from '../../data-summary.model';

@Component({
  selector: 'app-data-summary-item',
  templateUrl: './data-summary-item.component.html',
  styleUrls: ['./data-summary-item.component.css']
})
export class DataSummaryItemComponent implements OnInit {
@Input('dataItem') data: Data;
@Input() index: number;

  ngOnInit(): void {
  }

}
