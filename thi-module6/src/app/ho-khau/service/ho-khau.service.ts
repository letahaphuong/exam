import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {HoKhau} from "../entity/ho-khau";

@Injectable({
  providedIn: 'root'
})
export class HoKhauService {
  private API_URL = ' http://localhost:8080/hokhau';

  constructor(
    private http: HttpClient
  ) {
  }

  showAllList(request: any): Observable<HoKhau[]> {
    const params = request;
    return this.http.get<HoKhau[]>(this.API_URL, {params})
  }

  delete(id: number | undefined): Observable<HoKhau> {
    return this.http.delete<HoKhau>(this.API_URL + '/' + id);
  }

  search(maHoKhau: string, tenChuHo: string, request: any): Observable<any> {
    const params = request;
    const url = this.API_URL +
      '?maHoKhau=' + maHoKhau +
      '&tenChuHo=' + tenChuHo
    console.log(url)
    return this.http.get<any>(url, {params});
  }
  save(hoKhau: HoKhau | undefined): Observable<HoKhau> {
    console.log(hoKhau)
    return this.http.post<HoKhau>(this.API_URL, hoKhau);
  }

  findById(id: number): Observable<HoKhau> {
    return this.http.get<HoKhau>(this.API_URL + '/' + id);
  }

  update(hoKhauForm: HoKhau): Observable<HoKhau> {
    return this.http.patch<HoKhau>(this.API_URL + '/update/' + hoKhauForm.id, hoKhauForm);
  }
}
