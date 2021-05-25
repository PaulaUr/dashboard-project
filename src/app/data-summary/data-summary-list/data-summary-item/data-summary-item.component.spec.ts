import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSummaryItemComponent } from './data-summary-item.component';

describe('DataSummaryItemComponent', () => {
  let component: DataSummaryItemComponent;
  let fixture: ComponentFixture<DataSummaryItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataSummaryItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataSummaryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
