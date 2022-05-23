package springMVC.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import springMVC.mapper.BooksMapper;
import springMVC.mapper.PrelearningwordMapper;
import springMVC.mapper.WinfoMapper;
import springMVC.mapper.WordInfoMapper;
import springMVC.po.Winfo;
import springMVC.po.WordInfo;
import springMVC.service.PreWordsService;

import java.util.ArrayList;

@Service("PreWordsServiceImpl")
public class PreWordsServiceImpl implements PreWordsService {

    @Autowired
    @Qualifier("WinfoMapper")
    private WinfoMapper winfoMapper;

    @Autowired
    @Qualifier("WordInfoMapper")
    private WordInfoMapper wordInfoMapper;

    @Autowired
    @Qualifier("PrelearningwordMapper")
    private PrelearningwordMapper prelearningwordMapper;

    @Override
    public void save(int userId, String englishWord, int nextDays, int addDays) {
        wordInfoMapper.save(userId, englishWord, nextDays, addDays);
    }

    @Override
    public void remove(int userId, String englishWord) {
        wordInfoMapper.remove(userId, englishWord);
    }

    @Override
    public int queryTodayWordNum(int userId) {
        return wordInfoMapper.queryTodayWordNum(userId);
    }

    @Override
    public ArrayList<WordInfo> queryTodayLearningByPage(int userId, int recordIndex, int pageSize) {
        return wordInfoMapper.queryTodayLearningByPage(userId, recordIndex, pageSize);
    }

    //查询已学单词数量
    @Override
    public int queryLWordNum(int userId) {
        return prelearningwordMapper.queryLWordNum(userId);
    }
    //查询未学单词数量
    @Override
    public int queryULWordNum(int userId) {
        return prelearningwordMapper.queryULWordNum(userId);
    }
    //查询所有单词数量
    @Override
    public int queryAllWordNum(int userId) {
        return winfoMapper.queryAllWordNum(userId);
    }

    //获取已学单词
    @Override
    public ArrayList<Winfo> queryLearningWByPage(int userId, int recordIndex, int pageSize) {
        return winfoMapper.queryLearningWByPage(userId, recordIndex, pageSize);
    }
    //获取未学单词
    @Override
    public ArrayList<Winfo> queryULearningWByPage(int userId, int recordIndex, int pageSize) {
        return winfoMapper.queryULearningWByPage(userId, recordIndex, pageSize);
    }
    //获取所有生词
    @Override
    public ArrayList<Winfo> queryAllWByPage(int userId, int recordIndex, int pageSize) {
        return winfoMapper.queryAllWByPage(userId, recordIndex, pageSize);
    }
}
