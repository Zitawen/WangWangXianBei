package springMVC.mapper;

import org.junit.Assert;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import springMVC.BaseTest;
import springMVC.po.Prelearningword;
import springMVC.po.Word;
import springMVC.po.WordInfo;

import java.util.List;

import static org.junit.Assert.*;

public class PrelearningwordMapperTest extends BaseTest {
    @Autowired
    @Qualifier("PrelearningwordMapper")
    private PrelearningwordMapper prelearningwordMapper;


    /*
   查询所有今日需背单词及对应的所有用户
    */
    @Test
    public void findPrelearningwordsAndUsers() {
        List<Prelearningword> list=prelearningwordMapper.findPrelearningwordsAndUsers();
        for (Prelearningword prelearningword:list){
            System.out.println(prelearningword);
        }
    }

    @Test
    public void findOneWordByRandom() {
        List<WordInfo> list=prelearningwordMapper.findOneWordByRandom(2);
        for ( WordInfo wordInfo:list){
            System.out.println(wordInfo);
        }
        assertEquals(1, list.size());
    }

    @Test
    public void findOneWordByWord() {
        List<WordInfo> list=prelearningwordMapper.findOneWordByWord(1,"abrupt");
        for ( WordInfo wordInfo:list){
            System.out.println(wordInfo);
        }
        assertEquals(1, list.size());
    }

    @Test
    public void findLibraryWord() {
        List<Word> list=prelearningwordMapper.findLibraryWord("abnormal");
        for ( Word word:list){
            System.out.println(word);
        }
        assertEquals(1, list.size());
    }

    @Test
    public void savePrelearningword() {
        Prelearningword prelearningword=new Prelearningword();
        prelearningword.setUserid(1);
        prelearningword.setEnglishword("abolish");
        prelearningword.setNextdays(0);
        prelearningword.setAdddays(0);
        int result=prelearningwordMapper.savePrelearningword(prelearningword);
        Assert.assertEquals(1, result);
    }

    @Test
    public void updatePrelearningword() {
        Prelearningword prelearningword=new Prelearningword();
        prelearningword.setNextdays(0);
        prelearningword.setUserid(1);
        prelearningword.setEnglishword("affirm");
        int result=prelearningwordMapper.updatePrelearningword(prelearningword);
        Assert.assertEquals(1, result);
//        System.out.println(result);
    }

    @Test
    public void deletePrelearningword() {
        int result = prelearningwordMapper.deletePrelearningword(3,"remainder");
        Assert.assertEquals(1, result);
    }

    @Test
    public void queryWordNum() {
        int result=prelearningwordMapper.queryWordNum(1,"afafa");
        System.out.println(result);
    }
}