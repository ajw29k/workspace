package collection.list.문제;

import java.util.List;

public class School {
    private List<StudyClass> studyClassList;

    public School(List<StudyClass> classList){
        this.studyClassList = classList;
    }

    public List<StudyClass> getClassList(){
        return studyClassList;
    }
}
