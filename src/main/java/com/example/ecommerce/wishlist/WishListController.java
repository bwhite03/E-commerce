package com.example.ecommerce.wishlist;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class WishListController {
    @Autowired
    private WishListRepository WishListRepository;

    @PostMapping("/addToWishList")
    public WishList createCartItem(@RequestBody WishList wishList) {
        return WishListRepository.save(wishList);
    }

    @DeleteMapping("/removeWishListItem/{id}")
    public void removeUserCartItems(@PathVariable int id) {
        WishList wishListItem = WishListRepository.findByProductId(id);
        WishListRepository.delete(wishListItem);
    }

    @GetMapping("/fetchWishListItems")
    public List<WishListItem> getUserCartItems(@RequestParam int userId) {
        return WishListRepository.findAll(userId);
    }
}
