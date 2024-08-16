package com.green.Shop.cart.controller;

import com.green.Shop.cart.service.CartService;
import com.green.Shop.cart.vo.CartVO;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cart")
public class CartController {
    @Resource(name = "cartService")
    private CartService cartService;

    //장바구니에 상품 등록
    @PostMapping("/insertCart")
    public void insertCart(@RequestBody CartVO cartVO){
        cartService.insertCart(cartVO);
    }

    //장바구니 리스트
    @GetMapping("/cartList/{memId}")
    public List<CartVO> cartList(@PathVariable("memId") String memId){
        List<CartVO> list = cartService.cartList(memId);
        return list;
    }

    //장바구니 목록 삭제
    @GetMapping("/itemDelete/{cartCode}")
    public void itemDelete(@PathVariable("cartCode") int cartCode){
        cartService.itemDelete(cartCode);
    }
}
