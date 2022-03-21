package com.example.ecommerce.reviews;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class ReviewController {
    @Autowired
    private ReviewService reviewService;

    @GetMapping("/fetchReviews/{id}")
    public List<Review> getProduct(@PathVariable int id) {
        return reviewService.getProduct(id);
    }

    @PostMapping("/addReview")
    public Review createCartItem(@RequestBody Review review) {
        return reviewService.createCartItem(review);
    }
}
