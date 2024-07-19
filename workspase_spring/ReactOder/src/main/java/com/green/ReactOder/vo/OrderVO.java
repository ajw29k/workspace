package com.green.ReactOder.vo;

import lombok.Data;

@Data
public class OrderVO {
    private int orderNum;
    private String buyItemName;
    private int buyItemPrice;
    private String buyer;
    private int buyCnt;
    private int buyDate;
    private int buyPrice =buyItemPrice*buyCnt;
}
