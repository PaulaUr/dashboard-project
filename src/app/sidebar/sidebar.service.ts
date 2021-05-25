import { Injectable,EventEmitter } from '@angular/core';
import { Categories, CategorySelected } from './sidebar.model';
import { FAKE_DATA_CATEGORIES } from '../../api/data';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  categoryChanged = new EventEmitter<CategorySelected>();
  private data: Categories[] = FAKE_DATA_CATEGORIES;

  constructor() {}
  
  getSidebarList() {
    return this.data.slice();
  }

  getCategoryFilter(category) {
   this.categoryChanged.emit(category);
  }

}
