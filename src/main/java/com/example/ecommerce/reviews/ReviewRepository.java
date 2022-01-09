package com.example.ecommerce.reviews;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReviewRepository extends JpaRepository<Review, Integer>{
    List<Review> findByProductId(int id);
}
