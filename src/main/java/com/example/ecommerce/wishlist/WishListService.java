package com.example.ecommerce.wishlist;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Service
public class WishListService {
    @Autowired
    private WishListRepository wishListRepository;

    public WishList createCartItem(WishList wishList) {
        return wishListRepository.save(wishList);
    }

    public void removeUserCartItems(int id) {
        WishList wishListItem = wishListRepository.findByProductId(id);
        wishListRepository.delete(wishListItem);
    }

    public List<WishListItem> getUserCartItems(@RequestParam int userId) {
        return wishListRepository.findAll(userId);
    }

}
