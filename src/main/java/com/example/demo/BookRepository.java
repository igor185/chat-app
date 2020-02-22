package com.example.demo;

import com.example.demo.BookModel;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class BookRepository {
    private List<BookModel> list = new ArrayList<BookModel>();

    public void add(BookModel bookModel){
        list.add(bookModel);
    }

    public List<BookModel> getAll(){
        return this.list;
    }
}
