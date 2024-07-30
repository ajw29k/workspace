package com.green.CarSell.controller;


import com.green.CarSell.service.SalesService;
import com.green.CarSell.vo.SalesInfoVO;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/sales")
@RestController
public class SalesController {
    @Resource(name = "salesService")
    private SalesService salesService;

    @PostMapping("/insert")
    public void salInsert(@RequestBody SalesInfoVO salesInfoVO){
        salesService.salInsert(salesInfoVO);
    }
}
