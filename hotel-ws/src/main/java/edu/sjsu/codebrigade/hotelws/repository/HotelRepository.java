package edu.sjsu.codebrigade.hotelws.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import edu.sjsu.codebrigade.hotelws.persistence.Hotel;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface HotelRepository extends JpaRepository<Hotel, Integer> {

    @Query(value = "SELECT *"
            + "FROM hotel h where h.city_id = :cityId", nativeQuery = true)
    List<Hotel> fetchHotelsByCity(@Param("cityId")int cityId);

}