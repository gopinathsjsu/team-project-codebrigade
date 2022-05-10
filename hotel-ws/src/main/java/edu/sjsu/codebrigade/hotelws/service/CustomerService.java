package edu.sjsu.codebrigade.hotelws.service;

import edu.sjsu.codebrigade.hotelws.persistence.Customer;
import edu.sjsu.codebrigade.hotelws.repository.CustomerRepository;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class CustomerService {
    @Resource
    private CustomerRepository customerRepository;

    public int getRewardPoints(String emailId) {
        return customerRepository.fetchRewardPointsByEmailId(emailId);
    }

    public void updateRewardPoints(String emailId) {
        customerRepository.updateRewardPoints(emailId);
    }

    public void updateRewardPointsToZero(String emailId) {
        customerRepository.updateRewardPointsToZero(emailId);
    }

    public List<Customer> getCustomerDetails(){
        return customerRepository.getCustomerDetails();
    }

    public Customer save(Customer newCustomer) {
        return customerRepository.saveAndFlush(newCustomer);
    }
}
