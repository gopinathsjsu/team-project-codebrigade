package edu.sjsu.codebrigade.hotelws.repository;

import edu.sjsu.codebrigade.hotelws.persistence.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;


@Repository
public interface CustomerRepository extends JpaRepository<Customer, Integer> {

    @Query(value = "SELECT c.reward_points FROM customer c WHERE c.email = :emailId", nativeQuery = true)
    int fetchRewardPointsByEmailId(@Param("emailId")String emailId);

    @Modifying
    @Transactional
    @Query(value = "UPDATE customer c SET c.reward_points = c.reward_points+10  WHERE c.email = :emailId",nativeQuery = true)
    void updateRewardPoints(@Param("emailId")String emailId);

    @Query(value = "SELECT * FROM customer",nativeQuery = true)
    List<Customer> getCustomerDetails();
}
