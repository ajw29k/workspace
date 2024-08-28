package com.green.Board.controller;

import com.green.Board.service.BoardService;
import com.green.Board.vo.BoardVO;
import com.green.Board.vo.PageVO;
import com.green.Board.vo.SearchVO;
import jakarta.annotation.Resource;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/board")
public class BoardController {
    private static final Logger log = LoggerFactory.getLogger(BoardController.class);
    @Resource(name = "boardService")
    private BoardService boardService;

    //게시글 목록
    @PostMapping("/list")
    public Map<String, Object> getBoardList(@RequestBody(required = false) SearchVO searchVO, PageVO pageVO){
        log.info("=======넘어온 페이지 번호 : " + searchVO.getPageNo());

        // 전체 게시글 수
        int totalDataCnt = boardService.getBoardCnt();

        //페이지 정보를 담을 수 있는 PageVO 객체 생성
        PageVO pageInfo =  new PageVO(totalDataCnt);

        // 현재 페이지 번호 설정
        pageInfo.setNowPage(searchVO.getPageNo());

        // 페이지 정보 설정
        pageInfo.setPageInfo();

        System.out.println(pageInfo);

        //리액트로 가져갈 모든 데이터를 담을 변수
        Map<String,Object> mapData = new HashMap<>();
        //페이징 정보가 담긴 데이터
        mapData.put("pageInfo",pageInfo);
        mapData.put("boardList",boardService.getBoardList(pageVO));
        return mapData;
    }


    //게시글 작성
    @PostMapping("/write")
    public void boardInsert(@RequestBody BoardVO boardVO){
         boardService.boardInsert(boardVO);
    }

    //게시글 상세목록
    @GetMapping("/detail/{boardNum}")
    public BoardVO getDetail(@PathVariable("boardNum") int boardNum){
        return boardService.goDetail(boardNum);
    }

    //게시글 수정
    @PostMapping("/update/{boardNum}")
    public void boardUpdate(@RequestBody BoardVO boardVO){
        boardService.boardUpdate(boardVO);
    }

    //게시글 삭제
    @GetMapping("/delete/{boardNum}")
    public void delete(@PathVariable("boardNum") int boardNum){
        boardService.delete(boardNum);
    }


}
