package springMVC.unused;

import org.apache.commons.io.FileUtils;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import java.io.File;
import java.io.IOException;

@Controller
public class DownloadController {
    @RequestMapping("/download")
    public ResponseEntity<byte[]> download(String filename,javax.servlet.http.HttpServletRequest request) throws IOException {
        //<byte[]字节流
        String path = request.getServletContext().getRealPath("/upload/");
        File file = new File(path+File.separator+filename);

        HttpHeaders headers = new HttpHeaders();//响应头
        headers.setContentDispositionFormData("attachment", filename);
        headers.setContentType(MediaType.APPLICATION_OCTET_STREAM);

        ResponseEntity<byte[]> ret = new ResponseEntity<byte[]>(FileUtils.readFileToByteArray(file), headers, HttpStatus.OK);
        return ret;//返回对象ResponseEntity<byte[]>
    }
}
