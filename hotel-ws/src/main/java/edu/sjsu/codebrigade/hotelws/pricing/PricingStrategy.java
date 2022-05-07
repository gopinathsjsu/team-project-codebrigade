package edu.sjsu.codebrigade.hotelws.pricing;

public abstract class PricingStrategy {
    public int getPrice(int basePrice){
        return basePrice;
    }

    public int getPrice(int numberOfGuests, int numOfRooms, int basePrice){
        return basePrice;
    }
}
