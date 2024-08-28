package com.green.Board.controller;

import com.green.Board.vo.PageVO;
import com.green.Board.vo.SearchVO;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class docMemChart {
    //매퍼파일에 들어가야할꺼
//    <!--관리자가 보는 환자예약 수-->
//    <select id="docMemChart" resultMap="schedule">
//    SELECT SCH_NUM
//            ,SCH_DATE
//            ,DOC_NAME
//        ,( SELECT DEPT_NAME
//    FROM medical_dept P
//    WHERE D.DEPT_NUM=P.DEPT_NUM
//        ) AS DEPT_NAME
//            ,MEM_NAME
//            ,DETAIL
//            ,SCH_STATUS
//    FROM MEDICAL_SCHEDULE S,MEDICAL_DOCTOR D,MEDICAL_MEMBER M
//    WHERE S.DOC_NUM=#{docNum}
//    AND S.DOC_NUM=D.DOC_NUM
//    AND S.MEM_NUM=M.MEM_NUM
//    ORDER BY SCH_NUM DESC
//
//    LIMIT #{displayDataCnt} OFFSET #{displayDataCnt} * (#{nowPage} - 1);
//    </select>
//
//    <!-- 총 게시글 수 조회하는 쿼리 -->
//    <select id="getChartCnt" resultType="int">
//    SELECT COUNT(BOARD_NUM)
//    FROM BOARD
//    </select>

    // 서비스에 들어갈꺼
//    //예약 목록 조회
//    List<ScheduleVO> getDocMem(PageVO pageVO,int docNum);

//    //전체 예약 갯수 조회
//    int getMemberCnt();

    // 서비스임플에 들어갈꺼
//    //예약 목록 조회
//    public List<ScheduleVO> getDocMem(int docNum) {
//        return sqlSession.selectList("scheduleMapper.docMemChart",docNum);
//    }
//
//    //전체 예약 갯수 조회
//    public int getBoardCnt() {
//      return sqlSession.selectOne("boardMapper.getBoardCnt");
//    }
    //컨트롤에 들어갈꺼
//    //의사별 담당환자 리스트
//    @GetMapping("/getDocMemList/{docNum}")
//    public List<ScheduleVO> getDocMemList(@PathVariable("docNum")int docNum, PageVO pageVO){
//        return scheduleService.getDocMem(docNum);
//    }
//    //게시글 목록
//    @PostMapping("/getDocMemList/{docNum}")
//    public Map<String, Object> getBoardList(@PathVariable("docNum")int docNum, PageVO pageVO){
//        // 전체 게시글 수
//        int totalDataCnt = scheduleService.getBoardCnt();
//
//        //페이지 정보를 담을 수 있는 PageVO 객체 생성
//        PageVO pageInfo =  new PageVO(totalDataCnt);
//
//        // 현재 페이지 번호 설정
//        pageInfo.setPageInfo();
//
//        // 페이지 정보 설정
//        pageInfo.setPageInfo();
//
//        System.out.println(pageInfo);
//
//        //리액트로 가져갈 모든 데이터를 담을 변수
//        Map<String,Object> mapData = new HashMap<>();
//        //페이징 정보가 담긴 데이터
//        mapData.put("pageInfo",pageInfo);
//        mapData.put("boardList",scheduleService.getBoardList(pageVO));
//        return mapData;
//    }




}
