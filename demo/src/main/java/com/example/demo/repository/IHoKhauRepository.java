package com.example.demo.repository;

import com.example.demo.model.HoKhau;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface IHoKhauRepository extends JpaRepository<HoKhau, Long> {

    @Query(value = "select * from ho_khau where flag_delete = false and ma_ho_khau like concat ('%', :maHoKhau, '%') and ten_chu_ho like concat ('%', :tenChuHo, '%')", nativeQuery = true)
    Page<HoKhau> findAll(@Param("maHoKhau") String maHoKhau, @Param("tenChuHo") String tenChuHo, Pageable pageable);

}
