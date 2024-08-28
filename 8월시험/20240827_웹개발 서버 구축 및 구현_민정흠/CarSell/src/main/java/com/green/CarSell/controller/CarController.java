package com.green.CarSell.controller;

import com.green.CarSell.service.CarService;
import com.green.CarSell.vo.CarInfoVO;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("car")
public class CarController {
    @Resource(name = "carService")
    private CarService carService;

    //차량 리스트
    @GetMapping("/list")
    public List<CarInfoVO> carList(){
        return carService.carList();
    }

    //차량 등록
    @PostMapping("/insert")
    public void insertCar(@RequestBody CarInfoVO carInfoVO){
        carService.insertCar(carInfoVO);
    }
}
