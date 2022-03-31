package edu.sjsu.codebrigade.hotelws;

import com.fasterxml.jackson.databind.ObjectMapper;
import edu.sjsu.codebrigade.hotelws.controller.HotelController;
import edu.sjsu.codebrigade.hotelws.dto.Hotel;
import edu.sjsu.codebrigade.hotelws.repository.HotelRepository;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.mockito.stubbing.OngoingStubbing;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import static java.util.Collections.singletonList;

import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@WebMvcTest(HotelController.class)
public class HotelControllerTest {
    @Autowired
    MockMvc mockMvc;

    @MockBean
    HotelRepository hotelRepository;

    Hotel h1 = new Hotel(1, "Hotel1");
    Hotel h2 = new Hotel(2, "Hotel2");
    Hotel h3 = new Hotel(3, "Hotel3");

    @Test
    public void getAllRecords_success() throws Exception {
        List<Hotel> records = new ArrayList<>(Arrays.asList(h1, h2, h3));

        //Mockito.when(hotelRepository.findAll()).thenReturn(records);
        //Mockito.when(hotelRepository.fetchHotelsByCity(h1.getId())).thenReturn(Optional.of(h1));

        List<Hotel> resList = singletonList(h1);
        //given(hotelRepository.fetchHotelsByCity(h1.getId())).willReturn(resList);
        //given(hotelRepository.findAll()).willReturn(records);

        mockMvc.perform(MockMvcRequestBuilders
                .get("/hotel/")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());

    }


}
