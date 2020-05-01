package com.example.demo.Entities;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.Embeddable;

@Embeddable
@Getter
@Setter
@ToString
public class File {
    private String fileDownloadUri;
    private String fileName;
    private String fileType;
    private Integer size;
    private Double height;
}
