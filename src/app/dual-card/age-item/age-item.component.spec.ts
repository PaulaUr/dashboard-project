import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeItemComponent } from './age-item.component';

describe('AgeItemComponent', () => {
  let component: AgeItemComponent;
  let fixture: ComponentFixture<AgeItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgeItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
