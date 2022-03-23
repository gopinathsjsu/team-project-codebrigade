package edu.sjsu.codebrigade.hotelws.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import edu.sjsu.codebrigade.hotelws.persistence.Hotel;

public interface HotelRepository extends JpaRepository<Hotel, Integer> {

    @Query("SELECT new edu.sjsu.codebrigade.hotelws.dto.Hotel(h.id, h.name)"
            + "FROM hotel h where h.cityId = :cityId",
            nativeQuery = true)
    List<Hotel> fetchHotelsByCity(@Param("cityId") cityId);

}