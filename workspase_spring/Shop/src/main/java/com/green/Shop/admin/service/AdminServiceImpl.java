package com.green.Shop.admin.service;

import com.green.Shop.item.vo.CategoryVO;
import com.green.Shop.item.vo.ItemVO;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("adminService")
public class AdminServiceImpl implements AdminService{
    @Autowired
    SqlSessionTemplate sqlSession;

    //카테고리 목록
    @Override
    public List<CategoryVO> categoryList() {
        return sqlSession.selectList("adminMapper.categoryList");

    }

    //상품 등록
    @Override
    public void insertItem(ItemVO itemVO) {
        sqlSession.insert("adminMapper.insertItem",itemVO);
    }

    @Override
    public void insertImg(ItemVO itemVO) {
        sqlSession.insert("adminMapper.insertImg",itemVO);
    }

    //다음에 들어갈 item-code 조회
    @Override
    public int getNextItemCode() {
        return sqlSession.selectOne("adminMapper.getNextItemCode");
    }

}
