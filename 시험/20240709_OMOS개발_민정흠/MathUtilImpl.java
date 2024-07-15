package test;

public class MathUtilImpl implements MathUtil{
    //매개변수로 받은 세 수의 합이 짝수이면서
    //동시에 5의 배수일 경우에만 리턴 true
    @Override
    public boolean isEven(int a, int b, int c) {
        if ((a+b+c)% 2 ==0 && (a+b+c) % 5 ==0){

            return true;

        }
            return false;
    }
    // int sum = a + b+ c;
    // return (sum % 2 == 0 && sum % 5 ==0);

    //1부터 매개변수로 받은 수까지의 합을 리턴
    @Override
    public int getSumFromOne(int num) {
        int sum = 0;
        for (int i = 0; i <= num; i++){
            sum = sum + i+1; //sum +=i;
        }
        return sum;
    }

    //아래 요구사항을 만족하는 getArraySum()메소드를 정의하시오.
    //매개변수로 정수형 배열이 들어오면
    //해당 배열의 모든 요소의 합을 리턴
    @Override
    public int getArrysum(int[] num) {
        int arrysum = 0;
        for (int i = 0; i < num.length; i++){
            arrysum = arrysum + num[i];
        }
        return arrysum;
    }


}
