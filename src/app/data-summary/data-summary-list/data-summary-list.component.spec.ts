import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSummaryListComponent } from './data-summary-list.component';

describe('DataSummaryListComponent', () => {
  let component: DataSummaryListComponent;
  let fixture: ComponentFixture<DataSummaryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataSummaryListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataSummaryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
