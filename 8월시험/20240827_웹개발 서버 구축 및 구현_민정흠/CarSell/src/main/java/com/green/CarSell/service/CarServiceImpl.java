package com.green.CarSell.service;

import com.green.CarSell.vo.CarInfoVO;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("carService")
public class CarServiceImpl implements CarService{
    @Autowired
    SqlSessionTemplate sqlSession;

    @Override
    public List<CarInfoVO> carList() {
        return sqlSession.selectList("carMapper.carList");
    }

    @Override
    public void insertCar(CarInfoVO carInfoVO) {
        sqlSession.insert("carMapper.insertCar",carInfoVO);
    }
}
