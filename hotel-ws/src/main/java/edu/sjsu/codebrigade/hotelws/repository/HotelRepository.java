package edu.sjsu.codebrigade.hotelws.repository;

import edu.sjsu.codebrigade.hotelws.persistence.Hotel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HotelRepository extends JpaRepository<Hotel, Integer> {

    @Query(value = "SELECT * FROM hotel h, city c where h.city_id = c.id and c.name = :cityName", nativeQuery = true)
    List<Hotel> fetchHotelsByCity(@Param("cityName")String cityName);

    @Query(value = "SELECT * FROM hotel h", nativeQuery = true)
    List<Hotel> fetchAllHotels();
}