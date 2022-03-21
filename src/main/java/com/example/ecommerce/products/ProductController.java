package com.example.ecommerce.products;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class ProductController {
    @Autowired
    private ProductService productService;

    @GetMapping("/products")
    public Page<Product> allProducts(Pageable pageable) {
        return productService.getAllProducts(pageable);
    }

    @GetMapping("/product/{id}")
    public Product getProduct(@PathVariable int id) {
        return productService.getProduct(id);
    }

    @GetMapping("/product/topRated")
    public List<Product> getTopRated() {
        return productService.getTopRated();
    }

    @PutMapping("/product/updateRating")
    @ResponseBody
    public void updateUserCartItems(@RequestBody Product product) {
        productService.updateUserCartItems(product);
    }

    @GetMapping("/similarProducts/{type}/{id}")
    public List<Product> fetchSimilarProducts(@PathVariable String type, @PathVariable int id) {
        return productService.fetchSimilarProducts(type, id);
    }

    @GetMapping("/products/filter")
    @ResponseBody
    public Page<Product> findAll(@RequestParam String type, @RequestParam String brand, @RequestParam String price, Pageable pageable) {
        return productService.findAll(type,brand,price,pageable);
    }

}
