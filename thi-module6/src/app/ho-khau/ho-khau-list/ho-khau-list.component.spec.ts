import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoKhauListComponent } from './ho-khau-list.component';

describe('HoKhauListComponent', () => {
  let component: HoKhauListComponent;
  let fixture: ComponentFixture<HoKhauListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoKhauListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoKhauListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
