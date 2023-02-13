import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoKhauCreateComponent } from './ho-khau-create.component';

describe('HoKhauCreateComponent', () => {
  let component: HoKhauCreateComponent;
  let fixture: ComponentFixture<HoKhauCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoKhauCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoKhauCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
