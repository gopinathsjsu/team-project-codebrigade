package edu.sjsu.codebrigade.hotelws.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.json.JsonMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import edu.sjsu.codebrigade.hotelws.BookingCheckoutValidationHandler;
import edu.sjsu.codebrigade.hotelws.BookingLengthValidationHandler;
import edu.sjsu.codebrigade.hotelws.BookingValidationHandler;
import edu.sjsu.codebrigade.hotelws.persistence.Booking;
import edu.sjsu.codebrigade.hotelws.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;
import java.util.TimeZone;

@RestController
public class BookingController {

    @Autowired
    private BookingService bookingService;

    private BookingValidationHandler checkoutValidation;

    public BookingController() {
        this.checkoutValidation = new BookingCheckoutValidationHandler();
        this.checkoutValidation.setNext(new BookingLengthValidationHandler());
    }

    // ObjectMapper is threadsafe, use a global for performance reasons
    private static final ObjectMapper mapper = JsonMapper.builder()
            .addModule(new JavaTimeModule()) // see https://github.com/FasterXML/jackson-modules-java8/tree/2.14/datetime#registering-module
            .build()
            .setTimeZone(TimeZone.getTimeZone("PST")); // match DB time

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
        try {
            checkoutValidation.isOkay(checkin, checkout);
        } catch (BookingValidationHandler.ValidationException e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage());
        }
//        if (checkin == null || checkout == null || checkin.isAfter(checkout))
//            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "checkin cannot occur after checkout");
//        if (checkin.plusDays(7).isBefore(checkout))
//            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "booking cannot exceed 7 days");
        // ensure no bookings conflict/overlap
        List<Booking> existing = bookingService.getBookingsByRoomIdAndDate(newBooking.getRoomId(), checkin);
        if (!existing.isEmpty())
            throw new ResponseStatusException(HttpStatus.CONFLICT, "checkin conflicts with "+ existing.size() +" existing booking(s)");
        Booking booking = bookingService.save(newBooking);
        return new ResponseEntity<>(booking, HttpStatus.CREATED);
    }

}