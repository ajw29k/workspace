package com.green.CarSell.service;

import com.green.CarSell.vo.CarInfoVO;

import java.util.List;

public interface CarService {
    //차량 리스트
    List<CarInfoVO> carList();

    //차량 등록
    void insertCar(CarInfoVO carInfoVO);
}
