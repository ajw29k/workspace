package com.green.Shop.item.controller;

import com.green.Shop.item.service.ItemService;
import com.green.Shop.item.vo.ItemVO;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/item")
public class ItemController {
    @Resource(name = "itemService")
    private ItemService itemService;

    @GetMapping("/itemList")
    public List<ItemVO> item(){
        return itemService.itemlist1();
    }

    @GetMapping("/detail/{itemNum}")
    public ItemVO itemVO(@PathVariable(name = "itemNum") int itemNum){
        return itemService.itemDetail(itemNum);
    }
}