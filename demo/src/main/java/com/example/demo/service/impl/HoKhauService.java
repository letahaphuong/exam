package com.example.demo.service.impl;

import com.example.demo.model.HoKhau;
import com.example.demo.repository.IHoKhauRepository;
import com.example.demo.service.IHoKhauService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class HoKhauService implements IHoKhauService {

    @Autowired
    private IHoKhauRepository hoKhauRepository;

    @Override
    public Page<HoKhau> showListHoKhau(String maHoKhau,String tenChuHo,Pageable pageable) {
        return hoKhauRepository.findAll(maHoKhau,tenChuHo,pageable);
    }

    @Override
    public void delete(Long id) {
        hoKhauRepository.deleteById(id);
    }

    @Override
    public HoKhau finById(Long id) {
        return hoKhauRepository.findById(id).orElse(null);
    }

    @Override
    public void update(HoKhau hoKhau) {
        hoKhauRepository.save(hoKhau);
    }
}
