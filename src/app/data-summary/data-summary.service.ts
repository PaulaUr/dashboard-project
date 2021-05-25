import { Injectable } from '@angular/core';
import { Data } from './data-summary.model';
import { FAKE_DATA } from '../../api/data';

@Injectable({
  providedIn: 'root',
})
export class DataSummaryService {
  private data: Data[] = FAKE_DATA;

  constructor() {}
  getDataSummary() {
    return this.data.slice();
  }
}
