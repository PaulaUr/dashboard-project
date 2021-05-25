import { Component, OnInit } from '@angular/core';
import { Data } from '../data-summary.model';
import { DataSummaryService } from '../data-summary.service';


@Component({
  selector: 'app-data-summary-list',
  templateUrl: './data-summary-list.component.html',
  styleUrls: ['./data-summary-list.component.css']
})
export class DataSummaryListComponent implements OnInit {
  dataList: Data[];

  constructor(
    private dataSummaryService: DataSummaryService,
  ) { }

  ngOnInit(): void {
    this.dataList = this.dataSummaryService.getDataSummary();
  }

}
