package 상속;

import class_baisic.math.Sub;

public class SuperCls {
    public SuperCls(){}
    public SuperCls(int a){
    }
    public SuperCls(String a,int b){

    }
}


class SubCls extends SuperCls{
    public SubCls(){
        super("aa", 10);

    }
}