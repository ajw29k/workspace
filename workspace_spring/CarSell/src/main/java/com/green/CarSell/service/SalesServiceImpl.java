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
          // 내맘대로 만들어도 되는곳
    public void salInsert(SalesInfoVO salesInfoVO) {
        sqlSession.insert("salesMapper.salInsert",salesInfoVO);
    }//여기들어가는게 salInsert

    //구매자 리스트
    @Override
    public List<SalesInfoVO> salesList() {
        return sqlSession.selectList("salesMapper.salesList");
    }
}
