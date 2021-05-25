import { Component, OnInit } from '@angular/core';
import { ListGenderModified, ListAgeModified } from './dual-card.model';
import { DualCardService } from './dual-card.service';
import { SidebarService } from '../sidebar/sidebar.service';
import { element } from 'protractor';



@Component({
  selector: 'app-dual-card',
  templateUrl: './dual-card.component.html',
  styleUrls: ['./dual-card.component.css'],
})
export class DualCardComponent implements OnInit {
  // @Output() filterGender: EventEmitter<any> = new EventEmitter();
  genderList: ListGenderModified[];
  ageList: ListAgeModified[];
  showTitleGender: boolean = false;
  showAge: boolean = false;

  constructor(
    private dualCardService: DualCardService,
    private sidebarService: SidebarService
  ) {}

  ngOnInit() {
    this.genderList = this.dualCardService.getGenderList();
    this.ageList = this.dualCardService.getAgeList();
    this.genderList.map((el) => {
      el.checked = false;
    });
    this.ageList.map((element) => {
      for (let item of element.data) {
        item.checked = false;
      }
    });

    this.sidebarService.categoryChanged.subscribe((filter) => {
      this.handleFilterCategory(filter);
    });
  }

  handleFilterCategory(filter) {
    const { category, checked, itemCategory } = filter;
    const genderCategory = this.genderList.findIndex(
      (item) => item.typeOfData === category
    );
    const ageCategory = this.ageList.findIndex(
      (item) => {
        for (let element of item.data) {
          return element.typeOfData === category
        }
      }
    );
    if (genderCategory !== -1) {
      this.handleDataOfGender(itemCategory, checked);
    } else if (ageCategory !== -1) {
      this.handleDataOfAge(itemCategory, checked);
    }
  
  }

  handleDataOfGender(itemCategory, checked) {
    this.genderList.map((el) => {
      if (el.gender === itemCategory) {
        el.checked = checked;
      }
    });

    const checkedArray = this.genderList.filter(
      (element) => element.checked === true
    );
    this.showTitleGender = checkedArray.length > 0 ? true : false;
  }

  handleDataOfAge(itemCategory, checked) {
    this.ageList.map((element) => {
      for (let item of element.data) {
        if (item.label === itemCategory) {
          item.checked = checked;
        }
      }
    });
    const checkedArray = this.ageList.filter(
      (element) => {
        for (let itemData of element.data) {
          return itemData.checked === true
        }
      }
    );
    const indexID = checkedArray.findIndex(item => {
      for (let itemData of item.data) {
         return itemData.checked === false;
      }
    });
    indexID !== -1 && checkedArray.splice(indexID, 1);
    this.showAge = checkedArray.length > 0 ? true : false;
    this.dualCardService.updateAgeList(this.ageList);
  }
}
