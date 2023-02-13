import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoKhauEditComponent } from './ho-khau-edit.component';

describe('HoKhauEditComponent', () => {
  let component: HoKhauEditComponent;
  let fixture: ComponentFixture<HoKhauEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoKhauEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoKhauEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
