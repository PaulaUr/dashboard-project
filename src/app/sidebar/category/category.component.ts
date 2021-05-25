import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Categories } from '../sidebar.model';
import { SidebarService } from '../sidebar.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  @Input('dataItem') data: Categories;
  @Output('ngModelChange') update = new EventEmitter();
  categoryForm: FormGroup;
  category: string='';

  constructor(
    private sidebarService:SidebarService
  ) {}

  ngOnInit(): void {
    this.categoryForm = new FormGroup({
      'checkboxCategory': new FormControl(null)
    });
  }

  getValueCategory(event, item:string, data:Categories) {
    const filter = {
      category: data.title,
      itemCategory: item,
      checked: event.target.checked
    }
    this.sidebarService.getCategoryFilter(filter);
  }
}
