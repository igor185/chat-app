package com.example.demo;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

@RequiredArgsConstructor
@Controller
public class BookController {
    private final BookRepository bookRepository;

    @RequestMapping(value = "/book", method = RequestMethod.POST)
    public String add(@ModelAttribute BookModel bookModel) {
        bookRepository.add(bookModel);
        return "redirect:/book/list";
    }

    @RequestMapping(value = "/book/list", method = RequestMethod.GET)
    public String show(Model model){
        List<BookModel> books = bookRepository.getAll();
        model.addAttribute("books", books);
        return "books";
    }
}



