package com.green.ReactOder.service;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("order")
public class OrderServiceImpl implements OrderService{
    @Autowired
    SqlSessionTemplate sqlSessionTemplate;

}
