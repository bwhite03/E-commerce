package com.example.ecommerce.products;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;

import java.util.List;


public interface ProductRepository extends JpaRepository<Product, Integer>, JpaSpecificationExecutor<Product> {
    Product findById(int id);

    @Query(value = "SELECT * from product where type = ?1 AND id != ?2", nativeQuery = true)
    List<Product> findByType(String type, int id);

    Page<Product> findAll(Specification<Product> spec, Pageable pageable);

    @Query(value = "SELECT * from product ORDER BY rating DESC LIMIT 6", nativeQuery = true)
    List<Product> findByRating();

    @Query(value = "UPDATE product SET rating ?1 WHERE id = ?2", nativeQuery = true)
    Product updateRating(int rating, int id);

}
