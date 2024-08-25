package 자바시험;



public class Test3 {
    public static void main(String[] args) {
        int[] arr = {5,11,20,40,30};
        int max =arr[0] ;
        int min = arr[0];

        for (int e : arr){
            if (e < max ){
                 max = e;
            }
            if (e > min){
                min = e;
            }
        }
        System.out.println(max +""+min);
    }
}