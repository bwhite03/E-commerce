package com.example.ecommerce.products;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
public class ProductController {
    @Autowired
    private ProductRepository ProductRepository;

    @RequestMapping("/")
    public String getGreeting() {
        return "Hello World, it's me!";
    }

    @GetMapping("/products")
    public Iterable<Product> allProducts() {
        return ProductRepository.findAll();
    }

    @GetMapping("/product/{id}")
    public Product getProduct(@PathVariable int id) {
        return ProductRepository.findById(1);
    }
}
