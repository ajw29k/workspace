package com.green.CarSell.service;

import com.green.CarSell.vo.SalesInfoVO;

import java.util.List;

public interface SalesService {

    void salInsert(SalesInfoVO salesInfoVO);

    List<SalesInfoVO> salesList();
}
