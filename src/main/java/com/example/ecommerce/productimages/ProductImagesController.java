package com.example.ecommerce.productimages;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin
@RestController
public class ProductImagesController {
    @Autowired
    private ProductImagesService productImagesService;

    @GetMapping("/productImages/{id}")
    public List<ProductImages> getProductImages(@PathVariable int id) {
        return productImagesService.getProductImages(id);
    }

}
