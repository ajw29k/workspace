package com.green.CarSell.vo;

import lombok.Data;

@Data
public class SalesInfoVO {
    private int salNum;
    private String buyer;
    private String tell;
    private String color;
    private String buyDate;
    private int modelNum;
    private CarInfoVO carVO;
}
