import {ThanhVien} from "./thanh-vien";

export interface HoKhau {
  id: number;
  diaChi?: string;
  flagDelete?: boolean;
  maHoKhau?: string;
  soLuongThanhVien?: number;
  tenChuHo?: string;
  thanhVienId?: ThanhVien
}
