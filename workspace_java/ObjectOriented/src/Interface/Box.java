package Interface;

import java.sql.Wrapper;

//무엇이든 넣고 뺄수 있는 만능 박스
public class Box {
    //Objec클래스는 모든 클래스의 부모클래스. 기본자료형은 못넘김
    //Wrapper클래스는 모든 기본자료형 참조자료형 모두 클래스화 시켜놓음
    Object str;
    Wrapper str1;

    public void setBox(Object str){
        this.str = str;
    }
    public String getSetBox(String str){
        return str;
    }
}
