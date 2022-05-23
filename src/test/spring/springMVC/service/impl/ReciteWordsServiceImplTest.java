package springMVC.service.impl;

import org.junit.Assert;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import springMVC.BaseTest;
import springMVC.po.Prelearningword;
import springMVC.service.ReciteWordsService;
import springMVC.service.UserService;

import static org.junit.Assert.*;

public class ReciteWordsServiceImplTest extends BaseTest {
    @Autowired
    @Qualifier("ReciteWordsServiceImpl")
    private ReciteWordsService reciteWordsService;

    @Test
    public void queryPrelearningWords() {
        System.out.println(reciteWordsService.queryPrelearningWords(1));
    }

    @Test
    public void queryByWord() {
        System.out.println(reciteWordsService.queryByWord(1,"authorize"));
    }

    @Test
    public void queryLibraryWord() {
        System.out.println(reciteWordsService.queryLibraryWord("affiliate"));
    }

    @Test
    public void update() {
        Prelearningword prelearningword=new Prelearningword();
        prelearningword.setNextdays(1);
        prelearningword.setUserid(1);
        prelearningword.setEnglishword("affirm");
        int result=reciteWordsService.update(prelearningword);
        Assert.assertEquals(1, result);
    }

    @Test
    public void save() {
        Prelearningword prelearningword=new Prelearningword();
        prelearningword.setUserid(1);
        prelearningword.setEnglishword("batch");
        prelearningword.setNextdays(0);
        prelearningword.setAdddays(0);
        int result=reciteWordsService.save(prelearningword);
        Assert.assertEquals(1, result);
    }

    @Test
    public void remove() {
        Prelearningword prelearningword=new Prelearningword();
        prelearningword.setUserid(1);
        prelearningword.setEnglishword("abolish");
        int result = reciteWordsService.remove(prelearningword);
        Assert.assertEquals(1, result);
    }
}