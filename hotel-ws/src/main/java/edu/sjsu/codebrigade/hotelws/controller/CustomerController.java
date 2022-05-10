package edu.sjsu.codebrigade.hotelws.controller;

import edu.sjsu.codebrigade.hotelws.persistence.Customer;
import edu.sjsu.codebrigade.hotelws.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @GetMapping("/customer/rewards/{emailId}")
    public ResponseEntity<Integer> getRewardPoints(@PathVariable String emailId) {
        int rewardPoints = customerService.getRewardPoints(emailId);
        return ResponseEntity.ok().body(rewardPoints);
    }

    @PostMapping("/customer")
    @ResponseBody
    public ResponseEntity<Customer> create(@RequestBody Customer newCustomer) {
        newCustomer.setRewardPoints(0);
        newCustomer.setUserName(newCustomer.getEmail().split("@")[0]);
        Customer customer = customerService.save(newCustomer);
        return new ResponseEntity<>(customer, HttpStatus.CREATED);
    }

    public void update(@RequestBody String email) {
        customerService.updateRewardPoints(email);
    }

    public void updaterewardsToZero(@RequestBody String email) {
        customerService.updateRewardPointsToZero(email);
    }

    @GetMapping("/customer")
    @ResponseBody
    public ResponseEntity<List<Customer>> get() {
        List<Customer> customerList = customerService.getCustomerDetails();
        return ResponseEntity.ok().body(customerList);
    }

}
