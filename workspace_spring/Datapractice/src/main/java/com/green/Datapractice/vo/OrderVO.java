package com.green.Datapractice.vo;

import java.util.Arrays;

public class OrderVO {
    private String chicken;
    private int mari;
    private String[] add;
    private String roll;
    private int max;

    public int getMari() {
        return mari;
    }

    public void setMari(int mari) {
        this.mari = mari;
    }

    public String getChicken() {
        return chicken;
    }

    public void setChicken(String chicken) {
        this.chicken = chicken;
    }

    public String[] getAdd() {
        return add;
    }

    public void setAdd(String[] add) {
        this.add = add;
    }

    public String getRoll() {
        return roll;
    }

    public void setRoll(String roll) {
        this.roll = roll;
    }

    @Override
    public String toString() {
        return "OrderVO{" +
                "chicken='" + chicken + '\'' +
                ", mari=" + mari +
                ", add=" + Arrays.toString(add) +
                ", roll='" + roll + '\'' +
                '}';
    }
}
