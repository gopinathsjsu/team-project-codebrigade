package edu.sjsu.codebrigade.hotelws;

import edu.sjsu.codebrigade.hotelws.controller.BookingController;
import edu.sjsu.codebrigade.hotelws.dto.Hotel;
import edu.sjsu.codebrigade.hotelws.controller.HotelController;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertNotNull;

@SpringBootTest
class HotelWsApplicationTests {

	@Autowired
	private HotelController hotelController;

	@Autowired
	private BookingController bookingController;

	@Test
	void simpleTest() {
		Hotel hotel = hotelController.get("test");
		assertNotNull(hotel);
	}

}
