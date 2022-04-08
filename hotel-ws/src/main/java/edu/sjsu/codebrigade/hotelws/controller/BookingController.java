package edu.sjsu.codebrigade.hotelws.controller;

import edu.sjsu.codebrigade.hotelws.dto.Booking;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.atomic.AtomicLong;

@RestController
public class BookingController {

    private final AtomicLong counter = new AtomicLong();
    private final Map<Long, Booking> bookings = new HashMap();

    @GetMapping("/booking/{id}")
    public Booking get(@PathVariable long id) {
        Booking b = bookings.get(id);
        if (b == null)
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "entity not found");
        return b;
    }

    @PostMapping("/booking")
    @ResponseBody
    public Booking post(@RequestBody Booking newBooking) {
        long id = counter.incrementAndGet();
        newBooking.setId(id);
        bookings.put(id, newBooking);
        return newBooking;
    }


}