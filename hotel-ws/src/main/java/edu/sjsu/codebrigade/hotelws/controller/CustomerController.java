package edu.sjsu.codebrigade.hotelws.controller;

import edu.sjsu.codebrigade.hotelws.persistence.Customer;
import edu.sjsu.codebrigade.hotelws.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @GetMapping("/customer/rewards/{emailId}")
    public ResponseEntity<Float> getRewardPoints(@PathVariable String emailId) {
        Float rewardPoints = customerService.getRewardPoints(emailId);
        return ResponseEntity.ok().body(rewardPoints);
    }

    @PostMapping("/customer")
    @ResponseBody
    public ResponseEntity<Customer> create(@RequestBody String email) {
        Customer newCustomer = new Customer();
        newCustomer.setEmail(email);
        newCustomer.setRewardPoints(0);
        newCustomer.setUserName(email.split("@")[0]);
        Customer customer = customerService.save(newCustomer);
        return new ResponseEntity<>(customer, HttpStatus.CREATED);
    }

}
