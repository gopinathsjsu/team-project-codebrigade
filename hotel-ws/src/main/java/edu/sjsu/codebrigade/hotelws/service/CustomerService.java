package edu.sjsu.codebrigade.hotelws.service;

import edu.sjsu.codebrigade.hotelws.persistence.Customer;
import edu.sjsu.codebrigade.hotelws.repository.CustomerRepository;

import javax.annotation.Resource;

public class CustomerService {
    @Resource
    private CustomerRepository customerRepository;

    public Float getRewardPoints(String emailId) {
        return customerRepository.fetchRewardPointsByEmailId(emailId);
    }

    public Customer save(Customer newCustomer) {
        return customerRepository.saveAndFlush(newCustomer);
    }
}
