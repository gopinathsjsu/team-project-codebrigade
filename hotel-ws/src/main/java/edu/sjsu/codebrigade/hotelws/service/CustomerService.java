package edu.sjsu.codebrigade.hotelws.service;

import edu.sjsu.codebrigade.hotelws.persistence.Customer;
import edu.sjsu.codebrigade.hotelws.repository.CustomerRepository;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service
public class CustomerService {
    @Resource
    private CustomerRepository customerRepository;

    public int getRewardPoints(String emailId) {
        return customerRepository.fetchRewardPointsByEmailId(emailId);
    }

    public int updateRewardPoints(String emailId) {
        float rewardPoints = customerRepository.fetchRewardPointsByEmailId(emailId);
        return customerRepository.updateRewardPoints(rewardPoints, emailId);
    }

    public Customer save(Customer newCustomer) {
        return customerRepository.saveAndFlush(newCustomer);
    }
}
