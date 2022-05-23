package springMVC.mapper;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import springMVC.BaseTest;
import springMVC.po.Winfo;
import springMVC.po.WordInfo;

import java.util.List;

import static org.junit.Assert.*;

public class WinfoMapperTest extends BaseTest {

    @Autowired
    @Qualifier("WinfoMapper")
    private WinfoMapper wordInfoMapper;
    @Test
    public void queryLearningWByPage() {
        List<Winfo> WordInfoList = wordInfoMapper.queryLearningWByPage(1,0,6);
        for (int i = 0; i < WordInfoList.size(); i++)
            System.out.println(i+":" + WordInfoList.get(i).getEnglishword());

    }

    @Test
    public void queryULearningWByPage() {
        List<Winfo> WordInfoList = wordInfoMapper.queryULearningWByPage(1,0,6);
        for (int i = 0; i < WordInfoList.size(); i++)
            System.out.println(i+":" + WordInfoList.get(i).getEnglishword());
    }

    @Test
    public void queryAllWByPage() {
        List<Winfo> WordInfoList = wordInfoMapper.queryAllWByPage(1,0,6);
        for (int i = 0; i < WordInfoList.size(); i++)
            System.out.println(i+":" + WordInfoList.get(i).getEnglishword());
    }
}