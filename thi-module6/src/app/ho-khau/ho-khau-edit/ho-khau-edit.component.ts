import {Component, OnInit} from '@angular/core';
import {HoKhau} from "../entity/ho-khau";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HoKhauService} from "../service/ho-khau.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-ho-khau-edit',
  templateUrl: './ho-khau-edit.component.html',
  styleUrls: ['./ho-khau-edit.component.css']
})
export class HoKhauEditComponent implements OnInit {
  hoKhau: HoKhau = {id : 0}
  formEdit: FormGroup = new FormGroup({
    id: new FormControl(),
    diaChi: new FormControl('', [Validators.required]),
    maHoKhau: new FormControl('', [Validators.required]),
    soLuongThanhVien: new FormControl('',[Validators.required]),
    tenChuHo: new FormControl('',[Validators.required]),
    thanhVienId: new FormControl('', ),
    flagDelete: new FormControl(1)
  });

  constructor(
    private hoKhauService: HoKhauService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.activatedRoute.paramMap.subscribe(data => {
      const id = data.get('id');
      if (id != null) {
        this.getHoKhau(+id);
      }
    });
  }

  ngOnInit(): void {
  }

  getHoKhau(id: number): void {
    this.hoKhauService.findById(id).subscribe(data => {
      console.log('data nè :' + data);
      this.formEdit.patchValue(data);
    }, error => {
      this.toastr.error('Truy cập dữ liệu từ server không thành công', 'Thông báo');
    });
  }

  update(): any {
    const hoKhau = this.formEdit.value;
    this.hoKhauService.update(hoKhau).subscribe(data => {
      this.toastr.success('Cập nhật thành công', 'Thông báo');
    }, error => {
      this.toastr.error('Sửa không thành công', 'Thông báo');
      console.log(error);
    }, () => {
      this.router.navigateByUrl('/');
    });
  }
}
