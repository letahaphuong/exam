import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoKhauDeleteComponent } from './ho-khau-delete.component';

describe('HoKhauDeleteComponent', () => {
  let component: HoKhauDeleteComponent;
  let fixture: ComponentFixture<HoKhauDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoKhauDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoKhauDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
