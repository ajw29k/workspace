
public class MathUtilImpl implements MathUtil{

    @Override
    public boolean isEven(int a, int b, int c) {
        if ((a+b+c)% 2 ==0 && (a+b+c) % 5 ==0){

            return true;

        }
            return false;
    }

    @Override
    public int getSumFromOne(int num) {
        int sum = 0;
        for (int i = 0; i < num; i++){
            sum = sum + i+1;
        }
        return sum;
    }

    @Override
    public int getArrysum(int[] num) {
        int arrysum = 0;
        for (int i = 0; i < num.length; i++){
            arrysum = arrysum + num[i];
        }
        return arrysum;
    }


}
