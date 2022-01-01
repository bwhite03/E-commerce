package com.example.ecommerce.products;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import static com.example.ecommerce.products.ProductSpecs.*;

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
    public Page<Product> allProducts(Pageable pageable) {
        return ProductRepository.findAll(pageable);
    }

    @GetMapping("/product/{id}")
    public Product getProduct(@PathVariable int id) {
        return ProductRepository.findById(id);
    }

    @GetMapping("/products/filter")
    @ResponseBody
    public Page<Product> findAll(@RequestParam String type, @RequestParam String brand, @RequestParam String price, Pageable pageable) {

        if (type.equals("") && brand.equals("") && price.equals("")) {
            return ProductRepository.findAll(pageable);
        } else {
            return ProductRepository.findAll(hasProductType(type).and(hasProductBrand(brand)).and(hasProductPrice(price)), pageable);
        }

    }

}
