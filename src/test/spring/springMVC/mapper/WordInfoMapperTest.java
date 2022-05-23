package springMVC.mapper;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import springMVC.BaseTest;
import springMVC.po.Books;
import springMVC.po.Prelearningword;
import springMVC.po.WordInfo;

import java.util.List;

import static org.junit.Assert.*;

public class WordInfoMapperTest extends BaseTest {
    @Autowired
    @Qualifier("WordInfoMapper")
    private WordInfoMapper wordInfoMapper;

    @Test
    public void save() {
        wordInfoMapper.save(3,"remnant",0,0);
    }

    @Test
    public void remove() {
        wordInfoMapper.remove(3,"remnant");
    }

    @Test
    public void queryTodayWordNum() {
        int count = wordInfoMapper.queryTodayWordNum(1);
        System.out.println("总数：" + count);
    }

    @Test
    public void queryTodayLearningByPage() {
        List<WordInfo> WordInfoList = wordInfoMapper.queryTodayLearningByPage(1,0,6);
        for (int i = 0; i < WordInfoList.size(); i++)
            System.out.println(i+":" + WordInfoList.get(i).getEnglishword());
    }

}