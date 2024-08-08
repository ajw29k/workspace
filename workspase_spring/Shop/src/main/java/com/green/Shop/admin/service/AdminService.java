package com.green.Shop.admin.service;

import com.green.Shop.item.vo.CategoryVO;
import com.green.Shop.item.vo.ItemVO;

import java.util.List;

public interface AdminService {
    //카테고리 목록 조회
    List<CategoryVO> categoryList();

    //상품 등록
    void insertItem(ItemVO itemVO);

    //상품 이미지 등록
    void insertImg(ItemVO itemVO);

    //다음에 들어갈 item-code 조회
    int getNextItemCode();
}
