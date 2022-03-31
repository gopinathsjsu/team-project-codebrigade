package edu.sjsu.codebrigade.hotelws.service;

import edu.sjsu.codebrigade.hotelws.persistence.Hotel;
import org.springframework.stereotype.Service;
import edu.sjsu.codebrigade.hotelws.repository.HotelRepository;
import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

@Service
public class HotelService {

    @Resource
    private HotelRepository hotelRepository;

    public List<edu.sjsu.codebrigade.hotelws.dto.Hotel> getHotelsByCity(int cityId) {
        List<edu.sjsu.codebrigade.hotelws.persistence.Hotel> list = hotelRepository.fetchHotelsByCity(cityId);
        List<edu.sjsu.codebrigade.hotelws.dto.Hotel> resultList = new ArrayList<>();
        for(Hotel input: list){
            edu.sjsu.codebrigade.hotelws.dto.Hotel hotel = new edu.sjsu.codebrigade.hotelws.dto.Hotel(input.getId(), input.getName());
            resultList.add(hotel);
        }

        return resultList;
    }
}