import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HoKhauRoutingModule } from './ho-khau-routing.module';
import { HoKhauListComponent } from './ho-khau-list/ho-khau-list.component';
import { HoKhauCreateComponent } from './ho-khau-create/ho-khau-create.component';
import { HoKhauEditComponent } from './ho-khau-edit/ho-khau-edit.component';
import { HoKhauDetailComponent } from './ho-khau-detail/ho-khau-detail.component';
import {NgxPaginationModule} from "ngx-pagination";
import { HoKhauDeleteComponent } from './ho-khau-delete/ho-khau-delete.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [HoKhauListComponent, HoKhauCreateComponent, HoKhauEditComponent, HoKhauDetailComponent, HoKhauDeleteComponent],
  imports: [
    CommonModule,
    HoKhauRoutingModule,
    NgxPaginationModule,
    ReactiveFormsModule
  ]
})
export class HoKhauModule { }
