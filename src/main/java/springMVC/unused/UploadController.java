package springMVC.unused;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;

@Controller
public class UploadController {
    @RequestMapping("/upload")
    @ResponseBody
    public String upload(MultipartFile file,  javax.servlet.http.HttpServletRequest request) throws IOException {
        //MultipartFile file(绑定表单传入的文件对象)

        String path = request.getServletContext().getRealPath("/upload/");//返回upload的真实路径
        String filename = file.getOriginalFilename();
        file.transferTo(new File(path+filename));
        return "ok";

    }
}
