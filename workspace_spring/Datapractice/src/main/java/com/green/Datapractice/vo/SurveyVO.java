package com.green.Datapractice.vo;

import java.util.Arrays;

public class SurveyVO {
    private String intro;
    private String gender;
    private String[] hobby;//List<String>도 사용 가능
    private String path;

    public String getIntro() {
        return intro;
    }

    public void setIntro(String intro) {
        this.intro = intro;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String[] getHobby() {
        return hobby;
    }

    public void setHobby(String[] hobby) {
        this.hobby = hobby;
    }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }

    @Override
    public String toString() {
        return "SurveyVO{" +
                "intro='" + intro + '\'' +
                ", gender='" + gender + '\'' +
                ", hobby=" + Arrays.toString(hobby) +
                ", path='" + path + '\'' +
                '}';
    }
}
