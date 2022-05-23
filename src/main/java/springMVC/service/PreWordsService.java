package springMVC.service;

import springMVC.po.Winfo;
import springMVC.po.WordInfo;

import java.util.ArrayList;

public interface PreWordsService {

    public void save(int userId, String englishWord, int nextDays, int addDays);

    public void remove(int userId, String englishWord);

    public int queryTodayWordNum(int userId);

    public ArrayList<WordInfo> queryTodayLearningByPage(int userId, int recordIndex, int pageSize);

    public int queryULWordNum(int userId);

    public int queryLWordNum(int userId);

    public int queryAllWordNum(int userId);

    public ArrayList<Winfo> queryLearningWByPage(int userId, int recordIndex, int pageSize);

    public ArrayList<Winfo> queryULearningWByPage(int userId, int recordIndex, int pageSize);

    public ArrayList<Winfo> queryAllWByPage(int userId, int recordIndex, int pageSize);

}