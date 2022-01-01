package com.example.ecommerce.products;

import org.springframework.data.jpa.domain.Specification;



public class ProductSpecs {
    public static Specification<Product> hasProductType(String type) {
        return (root, query, builder) -> {
            if (type == "") {
                return null;
            }
            return builder.equal(root.get("type"), type);
        };
    }

    public static Specification<Product> hasProductPrice(String price) {
        return (root, query, builder) -> {
            if (price == "") {
                return null;
            }
            return builder.lessThanOrEqualTo(root.get("price"), price);
        };
    }

    public static Specification<Product> hasProductBrand(String brand) {
        return (root, query, builder) -> {
            if (brand == "") {
                return null;
            }
            return builder.equal(root.get("brand"), brand);
        };
    }
}
