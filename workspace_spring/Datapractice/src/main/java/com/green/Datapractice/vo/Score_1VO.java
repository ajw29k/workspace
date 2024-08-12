package com.green.Datapractice.vo;

import java.util.Arrays;
import java.util.List;

public class Score_1VO {
    private String name;
    private String year;
    private String[] tel;
    private String gender;
    private int korScore;
    private int engScore;
    private int mathScore;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getYear() {
        return year;
    }

    public void setYear(String year) {
        this.year = year;
    }

    public String[] getTel() {
        return tel;
    }

    public void setTel(String[] tel) {
        this.tel = tel;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public int getKorScore() {
        return korScore;
    }

    public void setKorScore(int korScore) {
        this.korScore = korScore;
    }

    public int getEngScore() {
        return engScore;
    }

    public void setEngScore(int engScore) {
        this.engScore = engScore;
    }

    public int getMathScore() {
        return mathScore;
    }

    public void setMathScore(int mathScore) {
        this.mathScore = mathScore;
    }

    @Override
    public String toString() {
        return "Score_1VO{" +
                "name='" + name + '\'' +
                ", year='" + year + '\'' +
                ", tel=" + Arrays.toString(tel) +
                ", gender='" + gender + '\'' +
                ", korScore=" + korScore +
                ", engScore=" + engScore +
                ", mathScore=" + mathScore +
                '}';
    }
}
