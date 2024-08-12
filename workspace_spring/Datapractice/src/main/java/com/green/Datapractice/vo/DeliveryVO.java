package com.green.Datapractice.vo;

public class DeliveryVO {
    private String name;
    private String tell;
    private String adr;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getTell() {
        return tell;
    }

    public void setTell(String tell) {
        this.tell = tell;
    }

    public String getAdr() {
        return adr;
    }

    public void setAdr(String adr) {
        this.adr = adr;
    }

    @Override
    public String toString() {
        return "DeliveryVO{" +
                "name='" + name + '\'' +
                ", tell='" + tell + '\'' +
                ", adr='" + adr + '\'' +
                '}';
    }
}
