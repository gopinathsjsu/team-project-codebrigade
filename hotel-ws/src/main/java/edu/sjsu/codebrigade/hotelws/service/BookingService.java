package edu.sjsu.codebrigade.hotelws.service;

import edu.sjsu.codebrigade.hotelws.persistence.Booking;
import edu.sjsu.codebrigade.hotelws.repository.BookingRepository;
import org.springframework.data.domain.Example;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.time.LocalDate;
import java.util.List;

@Service
public class BookingService {

    @Resource
    private BookingRepository bookingRepository;

    public List<Booking> getBookingsByRoomId(int roomId) {
        return bookingRepository.fetchBookingsByRoomId(roomId);
    }

    public List<Booking> getBookingsByRoomIdAndDate(int roomId, LocalDate date) {
        return bookingRepository.fetchBookingsByRoomIdAndDate(roomId, date);
    }

    public int getRoomIdByRoomTypeAndHotelName(String roomType, String hotelName){
        return bookingRepository.fetchRoomIdByRoomTypeAndHotelName(roomType, hotelName);
    }

    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }

    public List<Booking> getAllBookingsByExample(Example<Booking> example) {
        return bookingRepository.findAll(example);
    }

    public void deleteBooking(String emailId, int roomId, LocalDate checkin, LocalDate checkout) {
         bookingRepository.deleteBooking(emailId, roomId, checkin, checkout);
    }

    public Booking save(Booking newBooking) {
        return bookingRepository.saveAndFlush(newBooking);
    }
}