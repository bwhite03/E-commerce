package com.example.ecommerce.reviews;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class ReviewController {
    @Autowired
    private ReviewRepository ReviewRepository;

    @GetMapping("/fetchReviews/{id}")
    public List<Review> getProduct(@PathVariable int id) {
        return ReviewRepository.findByProductId(id);
    }

    @PostMapping("/addReview")
    public Review createCartItem(@RequestBody Review review) {
        System.out.println(review.getContent());
        return ReviewRepository.save(review);
    }
}
