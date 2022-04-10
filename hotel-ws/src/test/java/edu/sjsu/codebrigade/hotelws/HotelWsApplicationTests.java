package edu.sjsu.codebrigade.hotelws;

import edu.sjsu.codebrigade.hotelws.controller.BookingController;
import edu.sjsu.codebrigade.hotelws.controller.HotelController;
import edu.sjsu.codebrigade.hotelws.persistence.Booking;
import edu.sjsu.codebrigade.hotelws.persistence.Hotel;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.ResponseEntity;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@SpringBootTest
class HotelWsApplicationTests {

	@Autowired
	private HotelController hotelController;

	@Autowired
	private BookingController bookingController;

	@Test
	void simpleHotelTest() {
		assertNotNull(hotelController);
		ResponseEntity<List<Hotel>> hotels = hotelController.getHotels("San Jose");
		assertNotNull(hotels);
	}

	@Test
	void simpleBookingTest() {
		assertNotNull(bookingController);
		ResponseEntity<List<Booking>> bookings = bookingController.getAllBookings();
		assertNotNull(bookings);
		assertFalse(bookings.getBody().isEmpty());
	}

}
