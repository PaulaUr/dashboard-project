import { Component, Input, OnInit } from '@angular/core';
import { Categories } from './sidebar.model';
import { SidebarService } from './sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  @Input() visibleSidebar: boolean;
  categoriesList: Categories[];
  constructor(private sidebarService: SidebarService) {}

  ngOnInit(): void {
    this.categoriesList = this.sidebarService.getSidebarList();
  }
}
