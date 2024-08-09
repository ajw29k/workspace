package com.green.Shop.item.service;

import com.green.Shop.item.vo.ItemVO;

import java.util.List;

public interface ItemService {
    //책 리스트
    List<ItemVO> itemlist1();

    //책 상세정보
    ItemVO itemDetail(int itemCode);
}
