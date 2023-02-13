import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoKhauDetailComponent } from './ho-khau-detail.component';

describe('HoKhauDetailComponent', () => {
  let component: HoKhauDetailComponent;
  let fixture: ComponentFixture<HoKhauDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoKhauDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoKhauDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
