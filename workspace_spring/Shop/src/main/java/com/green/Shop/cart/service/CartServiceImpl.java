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

    //상품 담기할때 실행 코드
    @Override
    public void insertCart(CartVO cartVO) {
        // 내 장바구니에 상품존재 여부 확인
        CartVO vo = sqlSession.selectOne("cartMapper.checkCart", cartVO);

        // 없으면 insert 있으면 update
        if (vo == null){
            sqlSession.insert("cartMapper.insertCart",cartVO);
        }
        else {
            sqlSession.update("cartMapper.updateCartCntWhenReg",cartVO);
        }
    }

    @Override
    public List<CartVO> cartList(String memId) {
        return sqlSession.selectList("cartMapper.cartList",memId);
    }

    //장바구니 삭제
    @Override
    public void itemDelete(int cartCode) {
        sqlSession.delete("cartMapper.itemDelete",cartCode);
    }
}
