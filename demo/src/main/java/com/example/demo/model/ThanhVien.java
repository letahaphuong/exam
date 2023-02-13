package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.Set;

@Entity
public class ThanhVien {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String cmnd;
    private String hoVaTen;
    private String ngaySinh;

    @OneToMany(mappedBy = "thanhVien")
    @JsonBackReference
    private Set<HoKhau> hoKhaus;

    public ThanhVien() {
    }

    public ThanhVien(Long id, String cmnd, String hoVaTen, String ngaySinh, Set<HoKhau> hoKhaus) {
        this.id = id;
        this.cmnd = cmnd;
        this.hoVaTen = hoVaTen;
        this.ngaySinh = ngaySinh;
        this.hoKhaus = hoKhaus;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCmnd() {
        return cmnd;
    }

    public void setCmnd(String cmnd) {
        this.cmnd = cmnd;
    }

    public String getHoVaTen() {
        return hoVaTen;
    }

    public void setHoVaTen(String hoVaTen) {
        this.hoVaTen = hoVaTen;
    }

    public String getNgaySinh() {
        return ngaySinh;
    }

    public void setNgaySinh(String ngaySinh) {
        this.ngaySinh = ngaySinh;
    }

    public Set<HoKhau> getHoKhaus() {
        return hoKhaus;
    }

    public void setHoKhaus(Set<HoKhau> hoKhaus) {
        this.hoKhaus = hoKhaus;
    }
}
