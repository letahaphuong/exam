import {Component,EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HoKhau} from "../entity/ho-khau";
import {FormGroup} from "@angular/forms";
import {HoKhauService} from "../service/ho-khau.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-ho-khau-delete',
  templateUrl: './ho-khau-delete.component.html',
  styleUrls: ['./ho-khau-delete.component.css']
})
export class HoKhauDeleteComponent implements OnInit {
  @Input()
  hoKhau: HoKhau = {id: 0};
  @Output()
  eventDelete = new EventEmitter();
  deleteForm: FormGroup = new FormGroup({});
  constructor(
    private hoKhauService: HoKhauService,
    private toast: ToastrService
  ) { }

  ngOnInit(): void {
  }
  deleteEmployee(): void {
    this.hoKhauService.delete(this.hoKhau.id).subscribe(() => {
      this.eventDelete.emit();
      this.toast.success('Xoá thành công rồi','Thông báo');
    }, error => {
      this.toast.error('Xoá không thành công.');
    }, () => {

    });
  }
}
