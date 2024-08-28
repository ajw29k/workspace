package com.green.CarSell.controller;


import com.green.CarSell.service.SalesService;
import com.green.CarSell.vo.SalesInfoVO;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/sales")
@RestController
public class SalesController {
    @Resource(name = "salesService")
    private SalesService salesService;

    @PostMapping("/insert")
    public void salInsert(@RequestBody SalesInfoVO salesInfoVO){
        salesService.salInsert(salesInfoVO);
    }

    @GetMapping("/salesList")
    public List<SalesInfoVO> salesList(){
        return salesService.salesList();
    }
}
