package com.example.ecommerce.products;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

import static com.example.ecommerce.products.ProductSpecs.*;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;

    public Page<Product> getAllProducts(Pageable pageable){
        return productRepository.findAll(pageable);
    }

    public Product getProduct(int id) {
        return productRepository.findById(id);
    }

    public List<Product> getTopRated() {
        return productRepository.findByRating();
    }

    public void updateUserCartItems(Product product) {
        int id = product.getId();
        double rating = product.getRating();
        Product newProduct = productRepository.findById(id);
        newProduct.setRating(rating);
        productRepository.save(newProduct);
    }

    public List<Product> fetchSimilarProducts(String type, int id) {
        return productRepository.findByType(type, id);
    }

    public Page<Product> findAll(String type, String brand, String price, Pageable pageable) {
        if (type.equals("") && brand.equals("") && price.equals("")) {
            return productRepository.findAll(pageable);
        } else {
            return productRepository.findAll(hasProductType(type).and(hasProductBrand(brand)).and(hasProductPrice(price)), pageable);
        }
    }

}
