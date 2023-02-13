package com.example.demo.model;

import javax.persistence.*;

@Entity
public class HoKhau {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String maHoKhau;
    private String tenChuHo;
    private int soLuongThanhVien;
    private String diaChi;

    @Column(columnDefinition = "bit default false")
    private boolean flag_delete;

    @ManyToOne
    private ThanhVien thanhVien;

    public HoKhau(Long id, String maHoKhau, String tenChuHo, int soLuongThanhVien, String diaChi, boolean flag_delete, ThanhVien thanhVien) {
        this.id = id;
        this.maHoKhau = maHoKhau;
        this.tenChuHo = tenChuHo;
        this.soLuongThanhVien = soLuongThanhVien;
        this.diaChi = diaChi;
        this.flag_delete = flag_delete;
        this.thanhVien = thanhVien;
    }

    public HoKhau() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getMaHoKhau() {
        return maHoKhau;
    }

    public void setMaHoKhau(String maHoKhau) {
        this.maHoKhau = maHoKhau;
    }

    public String getTenChuHo() {
        return tenChuHo;
    }

    public void setTenChuHo(String tenChuHo) {
        this.tenChuHo = tenChuHo;
    }

    public int getSoLuongThanhVien() {
        return soLuongThanhVien;
    }

    public void setSoLuongThanhVien(int soLuongThanhVien) {
        this.soLuongThanhVien = soLuongThanhVien;
    }

    public String getDiaChi() {
        return diaChi;
    }

    public void setDiaChi(String diaChi) {
        this.diaChi = diaChi;
    }

    public boolean isFlag_delete() {
        return flag_delete;
    }

    public void setFlag_delete(boolean flag_delete) {
        this.flag_delete = flag_delete;
    }

    public ThanhVien getThanhVien() {
        return thanhVien;
    }

    public void setThanhVien(ThanhVien thanhVien) {
        this.thanhVien = thanhVien;
    }
}
