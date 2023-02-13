import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Title} from "@angular/platform-browser";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {HoKhauService} from "../service/ho-khau.service";
import {HoKhau} from "../entity/ho-khau";

@Component({
  selector: 'app-ho-khau-create',
  templateUrl: './ho-khau-create.component.html',
  styleUrls: ['./ho-khau-create.component.css']
})
export class HoKhauCreateComponent implements OnInit {
  formCreate: FormGroup = new FormGroup({});

  constructor(
    private hoKhauService: HoKhauService,
    private router: Router,
    private toast: ToastrService,
    private title: Title
  ) {
    this.title.setTitle('Thêm mới hộ khẩu') ;
    this.formCreate = new FormGroup({
      id: new FormControl(),
      diaChi: new FormControl('', [Validators.required]),
      maHoKhau: new FormControl('', [Validators.required]),
      soLuongThanhVien: new FormControl('',[Validators.required]),
      tenChuHo: new FormControl('',[Validators.required]),
      thanhVienId: new FormControl('', ),
      flagDelete: new FormControl(1)
    });
  }

  ngOnInit(): void {
  }

  create(): HoKhau | any {
    const hoKhau = this.formCreate.value;
    this.hoKhauService.save(hoKhau).subscribe(data => {
      this.formCreate.reset();
      this.toast.success('Thêm mới thành công!', 'Thông báo');
      this.router.navigateByUrl('/');
    }, error => {
      this.toast.error('Thêm mới không thành công', 'Thông báo');
    }, () => {
    });
  }

}
