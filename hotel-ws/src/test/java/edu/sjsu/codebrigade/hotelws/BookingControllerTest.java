package edu.sjsu.codebrigade.hotelws;

import com.fasterxml.jackson.databind.ObjectMapper;
import edu.sjsu.codebrigade.hotelws.controller.BookingController;
import edu.sjsu.codebrigade.hotelws.persistence.Booking;
import edu.sjsu.codebrigade.hotelws.repository.BookingRepository;
import edu.sjsu.codebrigade.hotelws.service.BookingService;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import java.sql.Date;
import java.sql.SQLIntegrityConstraintViolationException;
import java.util.ArrayList;

import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@WebMvcTest(BookingController.class)
public class BookingControllerTest {

    @Autowired
    MockMvc mockMvc;

    @Autowired
    ObjectMapper objectMapper;

    @MockBean
    BookingService bookingService;

    @MockBean
    BookingRepository bookingRepository;


    @Test
    public void getAllBookings_emptyList() throws Exception {
        Mockito.when(bookingService.getAllBookings()).thenReturn(new ArrayList<>());

        mockMvc.perform(MockMvcRequestBuilders
                .get("/booking")
                .contentType(MediaType.APPLICATION_JSON))
                .andDo(print())
                .andExpect(content().json("[]"))
                .andExpect(status().isOk());
    }

    @Test
    public void saveBooking() throws Exception {
        Booking newBooking = new Booking();
        Date today = new Date(System.currentTimeMillis());
        newBooking.setCheckin(today);
        newBooking.setCheckout(today);
        String newBookingAsString = objectMapper.writeValueAsString(newBooking);
        Mockito.when(bookingService.save(newBooking)).thenReturn(newBooking);

        mockMvc.perform(MockMvcRequestBuilders
                        .post("/booking")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(newBookingAsString))
                .andDo(print())
                .andExpect(status().isCreated());
    }

    @Test
    public void saveBooking_checkin_after_checkout() throws Exception {
        Booking newBooking = new Booking();
        Date today = new Date(System.currentTimeMillis());
        Date yesterday = new Date(System.currentTimeMillis() - 24 * 60 * 60 * 1000);
        newBooking.setCheckin(today);
        newBooking.setCheckout(yesterday);
        String newBookingAsString = objectMapper.writeValueAsString(newBooking);
        Mockito.when(bookingService.save(newBooking)).thenReturn(newBooking);

        mockMvc.perform(MockMvcRequestBuilders
                        .post("/booking")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(newBookingAsString))
                .andDo(print())
                .andExpect(status().isBadRequest());
    }

    @Test
    public void saveBooking_no_checkin() throws Exception {
        Booking newBooking = new Booking();
        String newBookingAsString = objectMapper.writeValueAsString(newBooking);
        Mockito.when(bookingService.save(newBooking)).thenReturn(newBooking);

        mockMvc.perform(MockMvcRequestBuilders
                        .post("/booking")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(newBookingAsString))
                .andDo(print())
                .andExpect(status().isBadRequest());
    }

}
