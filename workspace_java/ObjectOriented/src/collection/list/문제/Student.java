package collection.list.문제;

public class Student {
    private String name;
    private int korsocore;
    private int engsocore;
    private int totalscore;

    public Student(){

    }
    public Student(String name, int korsocore, int engsocore) {
        this.name = name;
        this.korsocore = korsocore;
        this.engsocore = engsocore;
        this.totalscore = korsocore + engsocore;
    }

    @Override
    public String toString() {
        return "Student{" +
                "name='" + name + '\'' +
                ", korsocore=" + korsocore +
                ", engsocore=" + engsocore +
                ", totalscore=" + totalscore +
                '}';
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getKorsocore() {
        return korsocore;
    }

    public void setKorsocore(int korsocore) {
        this.korsocore = korsocore;
    }

    public int getEngsocore() {
        return engsocore;
    }

    public void setEngsocore(int engsocore) {
        this.engsocore = engsocore;
    }

    public int getTotalscore() {
        return totalscore;
    }

    public void setTotalscore(int totalscore) {
        this.totalscore = totalscore;
    }
}
