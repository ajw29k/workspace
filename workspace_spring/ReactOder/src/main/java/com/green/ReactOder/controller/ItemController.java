package com.green.ReactOder.controller;

import com.green.ReactOder.service.ItemService;
import com.green.ReactOder.vo.ItemVO;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ItemController {
    @Resource(name = "itemService")
    private ItemService itemService;

    @GetMapping("/itemList")
    public List<ItemVO> itemList(){
        return itemService.itemList();
    }
}
