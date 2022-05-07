package edu.sjsu.codebrigade.hotelws.pricing;

public class RoomsPricingStrategy extends PricingStrategy{
    public int getPrice(int numberOfGuests, int numOfRooms, int basePrice, String roomName){
        basePrice =  basePrice* numOfRooms;

        if(roomName.contains("double")){
            return basePrice+=30;
        } else if(roomName.contains("suite")){
            return basePrice+=40;
        }else{
            return basePrice;
        }
    }
}
