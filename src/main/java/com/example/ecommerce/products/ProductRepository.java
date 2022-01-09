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



}
