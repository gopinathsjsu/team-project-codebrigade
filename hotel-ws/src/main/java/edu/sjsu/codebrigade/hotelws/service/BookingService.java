package edu.sjsu.codebrigade.hotelws.service;

import edu.sjsu.codebrigade.hotelws.persistence.Booking;
import edu.sjsu.codebrigade.hotelws.repository.BookingRepository;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.Date;
import java.util.List;

@Service
public class BookingService {

    @Resource
    private BookingRepository bookingRepository;

    public List<edu.sjsu.codebrigade.hotelws.persistence.Booking> getBookingsByRoomId(int roomId) {
        return bookingRepository.fetchBookingsByRoomId(roomId);
    }

    public List<edu.sjsu.codebrigade.hotelws.persistence.Booking> getBookingsByRoomIdAndDate(int roomId, Date date) {
        return bookingRepository.fetchBookingsByRoomIdAndDate(roomId, date);
    }

    public List<edu.sjsu.codebrigade.hotelws.persistence.Booking> getAllBookings() {
        return bookingRepository.findAll();
    }

    public Booking save(Booking newBooking) {
        return bookingRepository.saveAndFlush(newBooking);
    }
}