package edu.sjsu.codebrigade.hotelws.pricing;

public class GuestsPricingStrategy extends PricingStrategy{
    public int getPrice(int numberOfGuests, int numOfRooms, int basePrice){
        if(numberOfGuests > 2){
            return basePrice + ((numberOfGuests-2) * 20);
        }
        return basePrice;
    }
}
