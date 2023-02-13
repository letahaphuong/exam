package com.example.demo.controller;

import com.example.demo.dto.HoKhauDto;
import com.example.demo.model.HoKhau;
import com.example.demo.service.IHoKhauService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Optional;

@RestController
@RequestMapping("hokhau")
@CrossOrigin("*")
public class HoKhauController {

    @Autowired
    IHoKhauService hoKhauService;

    @GetMapping("")
    public ResponseEntity<Page<HoKhau>> showAllHoKhau(
            @RequestParam(defaultValue = "") String maHoKhau,
            @RequestParam(defaultValue = "") String tenChuHo,
            @PageableDefault(page = 0, size = 3) Pageable pageable) {
        Page<HoKhau> hoKhaus = hoKhauService.showListHoKhau(maHoKhau,tenChuHo,pageable);
        if (hoKhaus.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(hoKhaus, HttpStatus.OK);
    }

    @GetMapping("{id}")
    public ResponseEntity<HoKhau> findId(@PathVariable("id") Long id) {
        HoKhau hoKhau = hoKhauService.finById(id);
        if (hoKhau == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(hoKhau, HttpStatus.OK);
    }

    @PatchMapping("/update/{id}")
    public ResponseEntity<HoKhauDto> updateHoKhau(@Valid
                                                  @RequestBody HoKhauDto hoKhauDto,
                                                  @PathVariable("id") Long id,
                                                  BindingResult bindingResult) {
        if (hoKhauService.finById(id) == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        if (bindingResult.hasErrors()) {
            return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
        }
        HoKhau hoKhau = new HoKhau();
        BeanUtils.copyProperties(hoKhauDto, hoKhau);
        hoKhauService.update(hoKhau);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity<HoKhauDto> createHoKhau(@Valid
                                                  @RequestBody HoKhauDto hoKhauDto,
                                                  BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
        } else if (hoKhauDto == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        HoKhau hoKhau = new HoKhau();
        BeanUtils.copyProperties(hoKhauDto, hoKhau);
        hoKhauService.update(hoKhau);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HoKhau> deleteEmployee(@PathVariable("id") Long id) {
        HoKhau hoKhau = hoKhauService.finById(id);
        if (hoKhau == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        hoKhau.setFlag_delete(true);
        hoKhauService.update(hoKhau);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
