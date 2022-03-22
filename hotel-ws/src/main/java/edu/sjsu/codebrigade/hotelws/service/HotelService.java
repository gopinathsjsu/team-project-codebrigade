package edu.sjsu.codebrigade.hotelws.service;

import org.springframework.stereotype.Service;
import edu.sjsu.codebrigade.hotelws.repository.HotelRepository;
import javax.annotation.Resource;
import java.util.List;

@Service
public class HotelService {

    @Resource
    private HotelRepository hotelRepository;

    public List<Hotel> getHotelsByCity(int cityId) {
        List<Hotel> list = hotelRepository.fetchHotelsByCity(cityId);
        return list;
    }
}