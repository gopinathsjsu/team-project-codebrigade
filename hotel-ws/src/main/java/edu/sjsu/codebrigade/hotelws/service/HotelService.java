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

    public List<edu.sjsu.codebrigade.hotelws.persistence.Hotel> getHotelsByCity(String cityName) {
        List<edu.sjsu.codebrigade.hotelws.persistence.Hotel> list = hotelRepository.fetchHotelsByCity(cityName);
//        List<edu.sjsu.codebrigade.hotelws.dto.Hotel> resultList = new ArrayList<>();
//        for(Hotel input: list){
//            edu.sjsu.codebrigade.hotelws.dto.Hotel hotel = new edu.sjsu.codebrigade.hotelws.dto.Hotel();
//            hotel.setId(input.getId());
//            hotel.setName(input.getName());
//            hotel.setCityId(input.getCityId());
//            hotel.setCompanyId(input.getCompanyId());
//            hotel.setDesc(input.getDesc());
//            hotel.setAddress(input.getAddress());
//            hotel.setPrice(input.getPrice());
//
//            //hotel.setRoomList(input.getRooms());
//            resultList.add(hotel);
//        }

        return list;
    }
}