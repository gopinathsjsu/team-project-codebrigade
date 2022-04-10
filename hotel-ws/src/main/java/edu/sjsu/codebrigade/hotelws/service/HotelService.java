package edu.sjsu.codebrigade.hotelws.service;

import edu.sjsu.codebrigade.hotelws.repository.HotelRepository;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class HotelService {

    @Resource
    private HotelRepository hotelRepository;

    public List<edu.sjsu.codebrigade.hotelws.persistence.Hotel> getHotelsByCity(String cityName) {
        return hotelRepository.fetchHotelsByCity(cityName);
    }

    public List<edu.sjsu.codebrigade.hotelws.persistence.Hotel> getAllHotels() {
        return hotelRepository.fetchAllHotels();
    }
}