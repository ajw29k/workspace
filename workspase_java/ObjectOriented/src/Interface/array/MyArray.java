package Interface.array;

public class MyArray implements MyArrayUtil{

    @Override
    public double getTowArrayAvg(int[] arr1, int[] arr2) {
        int sum = 0;
        double avg1 = 0;
        double avg2 = 0;
        for (int i = 0; i <arr1.length; i++){
            avg1 = avg1 + arr1[i];
            sum++;
        }
        for (int i= 0; i < arr2.length; i++){
            avg2 = avg2 +arr2[i];
            sum++;
        }
        return (avg1+avg2)/sum;
    }

    @Override
    public boolean isEvenArray(int[] array) {
        int dl = 0 ;
        for (int i = 0; i < array.length; i++){
            if (array[i] % 2 == 0){
                dl++;
            }
        }
        if(dl == array.length){
            return true;
        }
        return false;
    }
}
