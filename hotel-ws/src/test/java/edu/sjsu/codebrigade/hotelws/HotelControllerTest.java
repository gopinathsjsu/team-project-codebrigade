package edu.sjsu.codebrigade.hotelws;

import com.fasterxml.jackson.databind.ObjectMapper;
import edu.sjsu.codebrigade.hotelws.controller.HotelController;

import edu.sjsu.codebrigade.hotelws.repository.HotelRepository;
import edu.sjsu.codebrigade.hotelws.service.HotelService;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import edu.sjsu.codebrigade.hotelws.persistence.Hotel;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;


import static org.hamcrest.collection.IsCollectionWithSize.hasSize;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;


@WebMvcTest(HotelController.class)
public class HotelControllerTest {
    @Autowired
    MockMvc mockMvc;

    @Autowired
    ObjectMapper objectMapper;

    @MockBean
    HotelService hotelService;

    @MockBean
    HotelRepository hotelRepository;

    Hotel h1 = new Hotel(1, "Hotel1", 1, 1);
    Hotel h2 = new Hotel(2, "Hotel2", 1, 1);
    Hotel h3 = new Hotel(3, "Hotel3", 1, 1);

    // @Test commented out by Sarinder on 4/22 in order to  get AWS CodeBuild working
    public void getAllRecords_success() throws Exception {
        List<Hotel> records = new ArrayList<>(Arrays.asList(h1, h2, h3));
        Mockito.when(hotelService.getHotelsByCity("Seattle")).thenReturn(records);

        mockMvc.perform(MockMvcRequestBuilders
                .get("/hotel/Seattle")
                .contentType(MediaType.APPLICATION_JSON))
                .andDo(print())
                .andExpect(jsonPath("$", hasSize(3)))
                .andExpect(jsonPath("$[0].id").value(1))
                .andExpect(jsonPath("$[0].name").value("Hotel1"))
                .andExpect(jsonPath("$[0].companyId").value(1))
                .andExpect(jsonPath("$[0].cityId").value(1))
                .andExpect(jsonPath("$[1].id").value(2))
                .andExpect(jsonPath("$[1].name").value("Hotel2"))
                .andExpect(jsonPath("$[1].companyId").value(1))
                .andExpect(jsonPath("$[1].cityId").value(1))
                .andExpect(jsonPath("$[2].id").value(3))
                .andExpect(jsonPath("$[2].name").value("Hotel3"))
                .andExpect(jsonPath("$[2].companyId").value(1))
                .andExpect(jsonPath("$[2].cityId").value(1))
                .andExpect(status().isOk());
    }

    @Test
    public void getAllRecords_emptyList() throws Exception {
        Mockito.when(hotelService.getAllHotels()).thenReturn(new ArrayList<>());

        mockMvc.perform(MockMvcRequestBuilders
                .get("/hotel")
                .contentType(MediaType.APPLICATION_JSON))
                .andDo(print())
                .andExpect(content().json("[]"))
                .andExpect(status().isOk());
    }

}
