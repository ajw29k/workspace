package collection.list.문제;

import java.util.List;

public class StudyClass {
    private String className;
    private String teacher;
    private List<Student_1> studentList;

    public List<Student_1> getStudentList() {
        return studentList;
    }

    public StudyClass(String className, String teacher, List<Student_1> stuList) {
        this.className = className;
        this.teacher = teacher;
        this.studentList = stuList;

    }
    //해당 반의 모든 학생의 모든 정보를 출력하는 기능
    public void printStuAll(){
        for (Student_1 stu :studentList){
            System.out.println(stu);
        }

    }

    public void allP(){
        System.out.println(studentList);
    }
    int sum = 0;
    int cnt = 0;
    public double avg(){
        for (int i = 0 ; i < studentList.size();i++){
            sum = sum + studentList.get(i).getScore();
            cnt++;
        }
        return sum / (double)cnt;
    }
    int max = 0;
//    public String maxScore(){
//        for (Student_1 stu : studentList){
//            if (max < stu.getScore()){
//                max = stu.getScore();
//            }
//            return stu.toString();
//        }
//
//    }


}
