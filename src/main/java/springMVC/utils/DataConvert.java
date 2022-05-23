package springMVC.utils;

import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

@Component//设置为容器
public class DataConvert implements Converter<String, Date> {//<传入类型，返回类型>
    private String format;

    public String getFormat() {
        return format;
    }

    public void setFormat(String format) {
        this.format = format;
    }

    @Override
    public Date convert(String s) {
        DateFormat df=new SimpleDateFormat(format);
        Date ret=null;
        try {
            ret=df.parse(s);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return ret;
    }
}
