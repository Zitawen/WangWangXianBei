package springMVC.utils;

import java.lang.reflect.Field;
import java.util.Collection;
import java.util.Iterator;

public class JsonConvert {
    public static String toJson(Object obj){
        StringBuffer json = new StringBuffer();

        if(obj instanceof Collection){
            json.append("[");
            Collection objColl = (Collection)obj;
            Iterator iterator = objColl.iterator();
            while(iterator.hasNext()){
                Object subObj = iterator.next();
                json.append(toJson(subObj)).append(",");
            }
            if(json.charAt(json.length() - 1) == ','){
                json.deleteCharAt(json.length() - 1);
            }
            json.append("]");
        }else{
            json.append("{");
            Class objClass = obj.getClass();
            Field[] fields = objClass.getDeclaredFields();
            for(Field field : fields){
                field.setAccessible(true);
                Object fieldObj = null;
                try {
                    fieldObj = field.get(obj);
                } catch (IllegalArgumentException e) {
                    e.printStackTrace();
                } catch (IllegalAccessException e) {
                    e.printStackTrace();
                }
                if(fieldObj != null){
                    if(fieldObj instanceof Collection){
                        continue;
                    }
                    json.append("\"").append(field.getName()).append("\":\"").append(fieldObj).append("\"").append(",");
                }else{
                    json.append("\"").append(field.getName()).append("\":null").append(",");
                }
            }
            if(json.charAt(json.length() - 1) == ','){
                json.deleteCharAt(json.length() - 1);
            }
            json.append("}");
        }
        return json.toString();
    }
}
