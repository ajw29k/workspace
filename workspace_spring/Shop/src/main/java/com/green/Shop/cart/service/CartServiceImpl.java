package com.green.Shop.cart.service;

import com.green.Shop.cart.vo.CartVO;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("cartService")
public class CartServiceImpl implements CartService{
    @Autowired
    private SqlSessionTemplate sqlSession;

    @Override
    public void insertCart(CartVO cartVO) {
        sqlSession.insert("cartMapper.insertCart",cartVO);
    }

    @Override
    public List<CartVO> cartList(String memId) {
        return sqlSession.selectList("cartMapper.cartList",memId);
    }

    @Override
    public void itemDelete(int cartCode) {
        sqlSession.delete("cartMapper.itemDelete",cartCode);
    }
}
