package com.green.Datapractice.controller;

import com.green.Datapractice.vo.DeliveryVO;
import com.green.Datapractice.vo.OrderVO;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class OrderController {

    //메뉴판
    @GetMapping("/order")
    public String chicken(){
        return "order";
    }

    //주문자
    @PostMapping("/delivery")
    public String delivery(OrderVO orderVO){
        System.out.println(orderVO);
        return "delivery";
    }

    //주문정보 확인 페이지로 이동
    @PostMapping("/info")
    public String order(OrderVO orderVO, DeliveryVO deliveryVO){
        System.out.println(orderVO);
        System.out.println(deliveryVO);

        return "order_info";
    }

}
