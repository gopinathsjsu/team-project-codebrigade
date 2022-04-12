package edu.sjsu.codebrigade.hotelws.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import edu.sjsu.codebrigade.hotelws.persistence.Booking;
import edu.sjsu.codebrigade.hotelws.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.TimeZone;

@RestController
public class BookingController {

    @Autowired
    private BookingService bookingService;

    @GetMapping("/booking/{roomId}")
    public ResponseEntity<List<Booking>> get(@PathVariable int roomId,
                                             @RequestParam(required = false)
                                             @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate date) {
        List<Booking> bookings;
        if (date == null)
            bookings = bookingService.getBookingsByRoomId(roomId);
        else
            bookings = bookingService.getBookingsByRoomIdAndDate(roomId, date);
        return ResponseEntity.ok().body(bookings);
    }

    @GetMapping("/booking")
    public ResponseEntity<List<Booking>> getAllBookingsByProbe(@RequestParam Map<String,String> params) {
        ObjectMapper mapper = new ObjectMapper();
        mapper.setTimeZone(TimeZone.getTimeZone("PST")); // the DB timezone must match
        Booking probe = mapper.convertValue(params, Booking.class);
        ExampleMatcher matcher = ExampleMatcher.matching().withIgnorePaths("roomId", "options", "cvc", "creditCard");
        Example<Booking> match = Example.of(probe, matcher);
        List<Booking> bookings = bookingService.getAllBookingsByExample(match);
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