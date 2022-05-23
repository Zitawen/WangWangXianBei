package springMVC.mapper;

import springMVC.po.Word;

public interface WordMapper {
    int deleteByPrimaryKey(String englishword);

    int insert(Word record);

    int insertSelective(Word record);

    Word selectByPrimaryKey(String englishword);

    int updateByPrimaryKeySelective(Word record);

    int updateByPrimaryKey(Word record);
}