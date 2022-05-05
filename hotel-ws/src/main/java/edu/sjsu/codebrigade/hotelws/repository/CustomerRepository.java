package edu.sjsu.codebrigade.hotelws.repository;

import edu.sjsu.codebrigade.hotelws.persistence.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface CustomerRepository extends JpaRepository<Customer, Integer> {

    @Query(value = "SELECT c FROM CUSTOMER c WHERE c.email = :emailId")
    Float fetchRewardPointsByEmailId(@Param("emailId")String emailId);
}
