package com.example.ecommerce.cart;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class CartController {
    @Autowired
    private CartService cartService;

    @PostMapping("/addToCart")
    public void createCartItem(@RequestBody Cart cartItem) {
        cartService.addToCart(cartItem);
    }

    @DeleteMapping("/removeCartItem/{id}")
    public void removeUserCartItems(@PathVariable int id) {
        cartService.removeUserCartItem(id);
    }

    @GetMapping("/fetchCartItems")
    public List<CartItem> getUserCartItems(@RequestParam int userId) {
        return cartService.findAll(userId);
    }

    @PutMapping("/updateCartItem")
    @ResponseBody
    public void updateUserCartItems(@RequestBody Cart cartItem) {
        cartService.updateUserCartItems(cartItem);
    }

    @DeleteMapping("/removeAllCartItems/{id}")
    public void removeAllUserCartItems(@PathVariable int id) {
        cartService.removeAllUserCartItems(id);
    }
}