package com.example.demo.service;

import com.example.demo.model.HoKhau;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;


public interface IHoKhauService {

    Page<HoKhau> showListHoKhau(String maHoKhau,String tenChuHo,Pageable pageable);

    void delete(Long id);

    HoKhau finById(Long id);

    void update(HoKhau hoKhau);


}
