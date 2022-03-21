package com.example.ecommerce.wishlist;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class WishListController {
    @Autowired
    private WishListService wishListService;

    @PostMapping("/addToWishList")
    public WishList createCartItem(@RequestBody WishList wishList) {
        return wishListService.createCartItem(wishList);
    }

    @DeleteMapping("/removeWishListItem/{id}")
    public void removeUserCartItems(@PathVariable int id) {
        wishListService.removeUserCartItems(id);
    }

    @GetMapping("/fetchWishListItems")
    public List<WishListItem> getUserCartItems(@RequestParam int userId) {
        return wishListService.getUserCartItems(userId);
    }
}
