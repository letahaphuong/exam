import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HoKhauListComponent} from "./ho-khau-list/ho-khau-list.component";
import {HoKhauCreateComponent} from "./ho-khau-create/ho-khau-create.component";
import {HoKhauEditComponent} from "./ho-khau-edit/ho-khau-edit.component";
import {HoKhauDetailComponent} from "./ho-khau-detail/ho-khau-detail.component";

const routes: Routes = [
  {path: '', component: HoKhauListComponent},
  {path: 'create', component: HoKhauCreateComponent},
  {path: 'edit/:id', component: HoKhauEditComponent},
  {path: 'detail/:id', component: HoKhauDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HoKhauRoutingModule { }
