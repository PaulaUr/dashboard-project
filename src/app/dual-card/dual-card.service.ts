import { Injectable, EventEmitter } from '@angular/core';
import { Gender, Age } from './dual-card.model';
import { FAKE_DATA_GENDER, FAKE_DATA_AGE } from '../../api/data';

@Injectable({
  providedIn: 'root',
})
export class DualCardService {
  ageListChanged = new EventEmitter<Age>();
  private data: Gender[] = FAKE_DATA_GENDER;
  private dataAge: Age[] = FAKE_DATA_AGE;

  constructor() {}
  
  getGenderList() {
    return this.data.slice();
  }
  getAgeList() {
    return this.dataAge.slice();
  }

  updateAgeList(list) {
    this.ageListChanged.emit(list);
  }
}
