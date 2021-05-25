import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { DataSummaryComponent } from './data-summary/data-summary.component';
import { DataSummaryListComponent } from './data-summary/data-summary-list/data-summary-list.component';
import { DataSummaryItemComponent } from './data-summary/data-summary-list/data-summary-item/data-summary-item.component';
import { DualCardComponent } from './dual-card/dual-card.component';
import { GenderItemComponent } from './dual-card/gender-item/gender-item.component';
import { AgeItemComponent } from './dual-card/age-item/age-item.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CategoryComponent } from './sidebar/category/category.component';
import { ChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DataSummaryComponent,
    DataSummaryListComponent,
    DataSummaryItemComponent,
    DualCardComponent,
    GenderItemComponent,
    AgeItemComponent,
    SidebarComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
