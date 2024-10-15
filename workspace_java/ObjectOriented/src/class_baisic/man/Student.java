package class_baisic.man;

public class Student {
    private String name;
    private int age;
    private int score;

    //매개변수를 받아 모든 맴버변수의 값을 변경하는 생성자
    //getter, setter
    //모든 맴버변수의 값을 출력하는 매서드
    public Student(String name,int age,int score){
        this.name = name;
        this.age = age;
        this.score = score;
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

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }
    public void print(){
        System.out.println("이름 : " + name);
        System.out.println("나이 : " + age);
        System.out.println("점수 : " + score);
    }
}
