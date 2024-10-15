package class_baisic.song;

public class SongTest {
    public static void main(String[] args) {
        Song s1 = new Song();
        String[] x = {"김","이","박"};
        s1.songpro("희재","성시경","1집",1995,x);

        s1.pre();
    }

}
