package springMVC.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import springMVC.mapper.PrelearningwordMapper;
import springMVC.po.Prelearningword;
import springMVC.po.Word;
import springMVC.po.WordInfo;
import springMVC.service.ReciteWordsService;

import java.util.ArrayList;

@Service("ReciteWordsServiceImpl")
public class ReciteWordsServiceImp implements ReciteWordsService {

    @Autowired
    @Qualifier("PrelearningwordMapper")
    private PrelearningwordMapper prelearningwordMapper;

    public ArrayList<WordInfo> queryPrelearningWords(Integer userid){
        return prelearningwordMapper.findOneWordByRandom(userid);
    }

    public ArrayList<WordInfo> queryByWord(int userid, String word){
        return prelearningwordMapper.findOneWordByWord(userid,word);
    }

    public ArrayList<Word> queryLibraryWord(String word){
        return prelearningwordMapper.findLibraryWord(word);
    }

    public int update(Prelearningword word){
        return prelearningwordMapper.updatePrelearningword(word);
    }

    public int save(Prelearningword word){
        return prelearningwordMapper.savePrelearningword(word);
    }

    public int remove(Prelearningword word){
        return prelearningwordMapper.deletePrelearningword(word.getUserid(),word.getEnglishword());
    }
}
