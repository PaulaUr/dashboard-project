import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  collapseSide = new EventEmitter<Boolean>();

  constructor() {}

//   getSidebarList() {
//     return this.data.slice();
//   }
}
