package edu.sjsu.codebrigade.hotelws.repository;

import edu.sjsu.codebrigade.hotelws.persistence.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Integer> {

    @Query(value = "SELECT * FROM booking b where b.room_id = :roomId", nativeQuery = true)
    List<Booking> fetchBookingsByRoomId(@Param("roomId")int roomId);

    @Query(value = "SELECT * FROM booking b where b.room_id = :roomId and b.checkin <= :date and b.checkout >= :date", nativeQuery = true)
    List<Booking> fetchBookingsByRoomIdAndDate(@Param("roomId")int roomId, @Param("date") Date date);
}