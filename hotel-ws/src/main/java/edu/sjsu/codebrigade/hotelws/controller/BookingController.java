package edu.sjsu.codebrigade.hotelws.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.json.JsonMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
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
import java.util.List;
import java.util.Map;
import java.util.TimeZone;

@RestController
public class BookingController {

    @Autowired
    private BookingService bookingService;

    // ObjectMapper is threadsafe, use a global for performance reasons
    private static final ObjectMapper mapper = JsonMapper.builder()
            .addModule(new JavaTimeModule()) // see https://github.com/FasterXML/jackson-modules-java8/tree/2.14/datetime#registering-module
            .build()
            .setTimeZone(TimeZone.getTimeZone("PST"));

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
        Booking probe = mapper.convertValue(params, Booking.class);
        ExampleMatcher matcher = ExampleMatcher.matching().withIgnorePaths("roomId", "options", "cvc", "creditCard");
        Example<Booking> match = Example.of(probe, matcher);
        List<Booking> bookings = bookingService.getAllBookingsByExample(match);
        return ResponseEntity.ok().body(bookings);
    }

    @PostMapping("/booking")
    @ResponseBody
    public ResponseEntity<Booking> create(@RequestBody Booking newBooking) {
        LocalDate checkin = newBooking.getCheckin();
        LocalDate checkout = newBooking.getCheckout();
        if (checkin == null || checkout == null || checkin.isAfter(checkout))
            return ResponseEntity.badRequest().build();
        Booking booking = bookingService.save(newBooking);
        return new ResponseEntity<>(booking, HttpStatus.CREATED);
    }
}