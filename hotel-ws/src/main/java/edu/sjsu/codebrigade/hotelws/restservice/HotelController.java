package edu.sjsu.codebrigade.hotelws.restservice;

import java.util.concurrent.atomic.AtomicLong;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HotelController {

    private final AtomicLong counter = new AtomicLong();

    @GetMapping("/hotel")
    public Hotel get(@RequestParam(value = "name", defaultValue = "Marriott") String name) {
        return new Hotel(counter.incrementAndGet(), name);
    }
}