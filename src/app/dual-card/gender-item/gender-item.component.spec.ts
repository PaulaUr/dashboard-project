import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenderItemComponent } from './gender-item.component';

describe('GenderItemComponent', () => {
  let component: GenderItemComponent;
  let fixture: ComponentFixture<GenderItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenderItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenderItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
