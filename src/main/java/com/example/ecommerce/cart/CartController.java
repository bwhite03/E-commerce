package com.example.ecommerce.cart;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class CartController {
    @Autowired
    private CartRepository CartRepository;

    @PostMapping("/addToCart")
    public Cart createCartItem(@RequestBody Cart cartItem) {

        return CartRepository.save(cartItem);
    }

    @DeleteMapping("/removeCartItem/{id}")
    public void removeUserCartItems(@PathVariable int id) {
        Cart cartItem = CartRepository.findByProductId(id);
        CartRepository.delete(cartItem);
    }

    @GetMapping("/fetchCartItems")
    public List<CartItem> getUserCartItems(@RequestParam int userId) {
        return CartRepository.findAll(userId);
    }

    @PutMapping("/updateCartItem")
    @ResponseBody
    public void updateUserCartItems(@RequestBody Cart cartItem) {
        Cart newItem = CartRepository.findByProductId(cartItem.getId());
        newItem.setQuantity(cartItem.getQuantity());
        CartRepository.save(newItem);
    }

    @DeleteMapping("/removeAllCartItems/{id}")
    public void removeAllUserCartItems(@PathVariable int id) {
        List<Cart> cartItem = CartRepository.findByUserId(id);

        for (Cart cart : cartItem){
            CartRepository.delete(cart);
        }
    }
}