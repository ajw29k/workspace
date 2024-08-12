package class_baisic.man;

//배열 + 클래스
public class StudentTest {
    public static void main(String[] args) {
        //학생을 5명 저장할 수 있는 배열을 생성
        //학생5명을 저장할 수 있는 통!
        Student[] student = new Student[5];

        //배열에 저장할 학생 객체 생성
        Student s1 = new Student("김",20,80);
        Student s2 = new Student("박",30,90);
        Student s3 = new Student("노",35,30);
        Student s4 = new Student("이",50,70);
        Student s5 = new Student("박",25,50);

        //배열 0번째 요소에 학생 s1 저장
        student[0] = s1;
        student[1] = s2;
        student[2] = s3;
        student[3] = s4;
        student[4] = s5;

        //1. 배열에 저장된 모든 학생의 이름,나이, 점수를 출력
//        for(int i =0; i < student.length; i++){
//            student[i].print();
//            System.out.println();
//        }

        //1번 문제를 for-each문으로 해결
//        for(Student e : student){
//            e.print();
//        }

        //2. 배열에 저장된 학생 중 점수가 80점 이상인 학생의 이름, 나이, 점수 출력
//        for(int i = 0; i < student.length; i++){
//            if (student[i].getScore() > 79){
//                student[i].print();
//            }
//        }

        //3. 이름이 '박'인 학생을 찾아 해당 학생의 나이를 10으로 변경
        //for, for-each
        for (int i =0; i < student.length; i++){
            if (student[i].getName().equals("박")){
                student[i].setAge(10);
                student[i].print();
            }
        }
        for(Student e : student){
            if (e.getName().equals("박")){
                e.setAge(15);
                e.print();
            }
        }
    }
}
