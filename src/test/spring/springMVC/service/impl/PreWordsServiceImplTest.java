package springMVC.service.impl;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import springMVC.BaseTest;
import springMVC.service.BooksService;
import springMVC.service.PreWordsService;

import static org.junit.Assert.*;

public class PreWordsServiceImplTest extends BaseTest {

    @Autowired
    @Qualifier("PreWordsServiceImpl")
    private PreWordsService preWordsService;

    @Test
    public void save() {
        preWordsService.save(1,"affirm",0,0);
    }

    @Test
    public void remove() {
    }

    @Test
    public void queryTodayWordNum() {
    }

    @Test
    public void queryTodayLearningByPage() {
    }

    @Test
    public void queryULWordNum() {
        int i=preWordsService.queryULWordNum(1);
        System.out.println(i);

    }

    @Test
    public void queryLWordNum() {
        int i=preWordsService.queryLWordNum(1);
        System.out.println(i);

    }

    @Test
    public void queryAllWByPage() {
        int i=preWordsService.queryLWordNum(1);
        System.out.println(i);
    }
}