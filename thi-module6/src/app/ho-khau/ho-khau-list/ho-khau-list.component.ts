import {Component, OnInit} from '@angular/core';
import {HoKhauService} from "../service/ho-khau.service";
import {ToastrService} from "ngx-toastr";
import {HoKhau} from "../entity/ho-khau";
import {HoKhauInfoJson} from "../entity/ho-khau-info-json";

@Component({
  selector: 'app-ho-khau-list',
  templateUrl: './ho-khau-list.component.html',
  styleUrls: ['./ho-khau-list.component.css']
})
export class HoKhauListComponent implements OnInit {
  hoKhauInfo: HoKhau[] = [];
  hoKhauList!: HoKhauInfoJson;
  request = {page: 0, size: 3};
  pageNumber = 0;
  totalPages = 0;
  temp: HoKhau = {id: 0};
  maHoKhau = '';
  tenChuHo = '';


  constructor(
    private hoKhauService: HoKhauService,
    private toast: ToastrService
  ) {
  }

  ngOnInit(): void {
    this.getAllHoKhau(this.request);
  }

  getAllHoKhau(request: {page: number, size: number}) {
    this.hoKhauService.showAllList(request).subscribe(data => {
      // @ts-ignore
      this.hoKhauList = data;
      // @ts-ignore
      this.hoKhauInfo = data.content;
      // @ts-ignore
      this.pageNumber = data.pageable.pageNumber
      // @ts-ignore
      this.totalPages = data.totalPages;
    }, error => {
    })
  }

  changePage(pageNumber: number) {
    this.request.page = pageNumber;
    this.ngOnInit();
  }

  reload() {
    this.request.page = 0;
    this.getAllHoKhau(this.request);
  }

  searchHoKhau(maHoKhau: string, tenChuHo: string,flag: boolean) {
    if (!flag) {
      this.request.page = 0;
    }
    this.maHoKhau = maHoKhau;
    this.tenChuHo = tenChuHo;
    console.log(maHoKhau);
    this.hoKhauService.search(
      maHoKhau.trim(),
      tenChuHo.trim(),
      this.request).subscribe(data => {
      console.log(data)
      this.hoKhauList = data;
      // @ts-ignore
      this.hoKhauInfo = data.content;
      // @ts-ignore
      this.totalPages = data.totalPages;
      // @ts-ignore
      this.pageNumber = data.pageable.pageNumber;
      if ((maHoKhau !== '' || tenChuHo !== '') && !flag) {
        this.toast.success('Tim kiếm thành công');
      }
    }, error => {
      this.tenChuHo = '';
      this.maHoKhau = '';
      flag = true;
      if (error.status === 404) {
        this.toast.error('Không có kết quả','Thông báo');
      }

    }, () => {
    });
  }
}
