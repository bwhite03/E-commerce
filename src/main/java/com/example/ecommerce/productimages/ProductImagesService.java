package com.example.ecommerce.productimages;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductImagesService {
    @Autowired
    private ProductImagesRepository productImagesRepository;

    public List<ProductImages> getProductImages(int id){
        return productImagesRepository.findByProductId(id);
    }
}
