package com.example.ecommerce.productimages;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductImagesRepository extends JpaRepository<ProductImages, Integer> {
    List<ProductImages> findByProductId(int id);
}
