package com.example.ecommerce.reviews;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
public class ReviewService {
    @Autowired
    private ReviewRepository reviewRepository;

    public List<Review> getProduct(@PathVariable int id) {
        return reviewRepository.findByProductId(id);
    }

    public Review createCartItem(@RequestBody Review review) {
        return reviewRepository.save(review);
    }
}
