package Interface.student;

public class MyStudent implements StudentUtil{
    @Override
    public String getGradeByStudentaName(Student[] students, String name) {
        String grade = "등급없음";
        for(Student stu : students){
            if (stu.getName().equals(name)){
                double avg = (stu.getKorScore() + stu.getMathScore() + stu.getEngScore()) / 3.0;
                grade = getGradeByAvg(avg);
            }

        }
        return grade;
    }

    //점수에 따른 등급 결정
    public String getGradeByAvg(double avg){
        String grade = "";
        if (avg >= 90 && avg < 100){
            grade = "A";
        } else if (avg >= 80) {
            grade = "B";
        } else if (avg >= 70) {
            grade = "C";
        }
        else {
            grade = "D";
        }
        return grade;
    }

    @Override
    //매개변수로 받은 다수의 학생들의 총점을 배열로 리턴

    public int[] getTotalScoresToArray(Student[] students) {
        //학생들의 총점이 저장될 배열 생성
        int[] totalScores = new int[students.length];

        for (int i = 0; i <students.length; i++){
            totalScores[i] = students[i].getKorScore() + students[i].getEngScore() + students[i].getMathScore();
        }


        return totalScores;
    }

    @Override
    //전달된 두 학생 중 높은 학생 객체를 리턴.
    //단, 전달된 두 학생의 총점이 같은 경우는 없다고 가정.
    public Student getHighScoreStudent(Student stu1, Student stu2) {
        int max1 =stu1.getKorScore() + stu1.getEngScore() + stu1.getMathScore();
        int max2 =stu2.getKorScore() + stu2.getEngScore() + stu2.getMathScore();

        return max1 > max2 ? stu1 : stu2;
    }
}
