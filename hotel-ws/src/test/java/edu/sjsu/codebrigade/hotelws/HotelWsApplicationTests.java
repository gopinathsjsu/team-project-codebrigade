package edu.sjsu.codebrigade.hotelws;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import edu.sjsu.codebrigade.hotelws.controller.BookingController;
import edu.sjsu.codebrigade.hotelws.controller.HotelController;
import edu.sjsu.codebrigade.hotelws.persistence.Booking;
import edu.sjsu.codebrigade.hotelws.persistence.Hotel;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Map;
import java.util.TimeZone;

import static org.junit.jupiter.api.Assertions.*;

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
	void nonEmptyBookingTest() throws JsonProcessingException {
		assertNotNull(bookingController);
		String json = "{}";
		ObjectMapper mapper = new ObjectMapper();
		Map<String, String> probe = mapper.readValue(json, Map.class);
		ResponseEntity<List<Booking>> bookings = bookingController.getAllBookingsByProbe(probe);
		assertNotNull(bookings);
		assertFalse(bookings.getBody().isEmpty());
	}

	@Test
	void emptyBookingTest() throws JsonProcessingException {
		assertNotNull(bookingController);
		String json = "{\"lastName\":\"NO_MATCHES_SHOULD_EXIST\"}";
		ObjectMapper mapper = new ObjectMapper();
		mapper.setTimeZone(TimeZone.getTimeZone("PST")); // the DB timezone must match
		Map<String, String> probe = mapper.readValue(json, Map.class);
		ResponseEntity<List<Booking>> bookings = bookingController.getAllBookingsByProbe(probe);
		assertNotNull(bookings);
		assertTrue(bookings.getBody().isEmpty());
	}

}
