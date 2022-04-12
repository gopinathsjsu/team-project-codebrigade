package edu.sjsu.codebrigade.hotelws.controller;

import edu.sjsu.codebrigade.hotelws.persistence.Booking;
import edu.sjsu.codebrigade.hotelws.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
public class BookingController {

    @Autowired
    private BookingService bookingService;

    @GetMapping("/booking/{roomId}")
    public ResponseEntity<List<Booking>> get(@PathVariable int roomId,
                                             @RequestParam(required = false)
                                             @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) Date date) {
        List<Booking> bookings;
        if (date == null)
            bookings = bookingService.getBookingsByRoomId(roomId);
        else
            bookings = bookingService.getBookingsByRoomIdAndDate(roomId, date);
        return ResponseEntity.ok().body(bookings);
    }

    @GetMapping("/booking")
    public ResponseEntity<List<Booking>> getAllBookings() {
        List<Booking> bookings = bookingService.getAllBookings();
        return ResponseEntity.ok().body(bookings);
    }

    @PostMapping("/booking")
    @ResponseBody
    public ResponseEntity<Booking> create(@RequestBody Booking newBooking) {
        Date checkin = newBooking.getCheckin();
        Date checkout = newBooking.getCheckout();
        if (checkin == null || checkout == null || checkin.after(checkout))
            return ResponseEntity.badRequest().build();
        Booking booking = bookingService.save(newBooking);
        return new ResponseEntity<>(booking, HttpStatus.CREATED);
    }
}