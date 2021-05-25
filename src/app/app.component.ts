import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('header') header: HeaderComponent;
  visible: boolean = false;


  onCollapse(collapse: boolean) {
    this.visible = collapse;
  }

}
