package com.sp.utility;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.commons.CommonsMultipartFile;

public class FileUploadForm {

    private List<MultipartFile> files;
    private String message;

    public void setFiles(List<MultipartFile> files) {
        this.files = files;
    }

    public List<MultipartFile> getFiles() {
        return files;
    }
    public String getMessage() {
		return message;
	}
    public void setMessage(String message) {
		this.message = message;
	}
}
