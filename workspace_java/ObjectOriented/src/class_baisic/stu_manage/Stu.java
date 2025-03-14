package class_baisic.stu_manage;

public class Stu {
    private String name;
    private int age;
    private String tel;
    private String grade;

    public Stu(String name, int age, String tel, String grade) {
        this.name = name;
        this.age = age;
        this.tel = tel;
        this.grade = grade;
    }

    //학생의 모든 정보 출력

    public void showInfo(){
        System.out.println("이름 : " + name);
        System.out.println("나이 : " + age);
        System.out.println("학점 : " + grade);
        System.out.println("연락처 : " + tel);
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getTel() {
        return tel;
    }

    public void setTel(String tel) {
        this.tel = tel;
    }

    public String getGrade() {
        return grade;
    }

    public void setGrade(String grade) {
        this.grade = grade;
    }
}
