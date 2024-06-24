package com.green.ListPractice.service;

import com.green.ListPractice.vo.StudentVO;
import lombok.Data;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.ArrayList;
import java.util.List;
@Data
//학생관리 프로그램의 핵심 기능을 정의
public class StudentService {
    List<StudentVO> list = new ArrayList<>();

    //학생 목록 조회
    public List<StudentVO> getStuList(){
        return list;
    }
    //학생 등록
    public void regStudent(StudentVO studentVO){
        list.add(studentVO);
    }

    //학생 상세 조회
    public StudentVO regGet(int stunum){
        //학번이 일치하는 학생을 저장할 공간.
        StudentVO findStudent = null;
        for (StudentVO studentVO : list){
            if(studentVO.getNum() == stunum){
                findStudent = studentVO;
            }
        }
        return findStudent;
    }
    //학생 삭제
    public void stuRemove(int stuNum){
        //삭제를 위해 인덱스 번호 필요
        //학번을 알기위해 변수 선언
        int index = 0;
        for (int i = 0; i < list.size(); i++){
            if (list.get(i).getNum() == stuNum){
                index = i;
            }
        }
        list.remove(index);
    }
    //학생 정보 수정
    public void updateStu(StudentVO studentVO){
        //list에서 정보를 수정하고자 하는 학생을 찾아
        //그 학생의 정보를 input태그 및 textarea에서 입력한 정보로 변경한다.
        for(StudentVO student : list){
            if (student.getNum()== studentVO.getNum()){//학번
                //for문에 변수 student에 있는 setName을
                //studentVO,getName()에 입력
                student.setName(studentVO.getName());
                student.setKorScore(studentVO.getKorScore());
                student.setEngScore(studentVO.getEngScore());
                student.setContent(studentVO.getContent());
            }
        }
    }




}
