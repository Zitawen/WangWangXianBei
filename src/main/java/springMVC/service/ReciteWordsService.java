package springMVC.service;

import springMVC.po.Prelearningword;
import springMVC.po.Word;
import springMVC.po.WordInfo;

import java.util.ArrayList;

public interface ReciteWordsService {

    public ArrayList<WordInfo> queryPrelearningWords(Integer userid);
    public ArrayList<WordInfo> queryByWord(int userid, String word);
    public ArrayList<Word> queryLibraryWord(String word);
    public int update(Prelearningword word);
    public int save(Prelearningword word);
    public int remove(Prelearningword word);
}
