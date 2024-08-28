package com.green.CarSell.service;

import com.green.CarSell.vo.SalesInfoVO;

import java.util.List;

public interface SalesService {

    void salInsert(SalesInfoVO salesInfoVO);

    //구매자 리스트
    List<SalesInfoVO> salesList();
}
