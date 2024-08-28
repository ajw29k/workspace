package com.green.CarSell.service;

import com.green.CarSell.vo.SalesInfoVO;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("salesService")
public class SalesServiceImpl implements SalesService{
    @Autowired
    SqlSessionTemplate sqlSession;

    @Override
    public void salInsert(SalesInfoVO salesInfoVO) {
        sqlSession.insert("salesMapper.salInsert",salesInfoVO);
    }

    @Override
    public List<SalesInfoVO> salesList() {
        return sqlSession.selectList("salesMapper.salesList");
    }
}
