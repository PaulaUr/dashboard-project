import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  visible: boolean = false;
  @Output() collapse = new EventEmitter<boolean>();


  ngOnInit(): void {}

  setCollapse() {
    this.visible = !this.visible;
    this.collapse.emit(this.visible);
  }
}
