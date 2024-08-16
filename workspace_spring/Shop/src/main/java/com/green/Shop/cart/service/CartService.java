package com.green.Shop.cart.service;

import com.green.Shop.cart.vo.CartVO;

import java.util.List;

public interface CartService {

    //장바구니 등록
    void insertCart(CartVO cartVO);

    //장바구니 리스트
    List<CartVO> cartList(String memId);

    //장바구니 목록 삭제
    void itemDelete(int cartCode);
}
