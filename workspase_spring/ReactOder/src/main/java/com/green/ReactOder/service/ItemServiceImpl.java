package com.green.ReactOder.service;

import com.green.ReactOder.vo.ItemVO;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service("itemService")
public class ItemServiceImpl implements ItemService{
    @Autowired
    SqlSessionTemplate sqlSession;

    @Override
    public List<ItemVO> itemList() {
        return sqlSession.selectList("itemMapper.itemList");
    }
}
