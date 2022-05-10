package edu.sjsu.codebrigade.hotelws.pricing;

import java.time.LocalDate;

public class SeasonalPricingStrategy extends PricingStrategy {

    @Override
    public int getPrice(LocalDate checkinDate, LocalDate checkoutDate,  int basePrice) {
        LocalDate seasonStart = LocalDate.parse("2022-06-01");
        LocalDate seasonEnd = LocalDate.parse("2022-07-31");
        if((checkinDate.compareTo(seasonStart) >= 0) && ((checkoutDate.compareTo(seasonEnd) <= 0))) {
            return basePrice + 40;
        }
        LocalDate winterSeasonStart = LocalDate.parse("2022-12-01");
        LocalDate winterSeasonEnd = LocalDate.parse("2022-12-31");
        if((checkinDate.compareTo(winterSeasonStart) >= 0) && ((checkoutDate.compareTo(winterSeasonEnd) <= 0))) {
            return basePrice + 50;
        }
        return basePrice;
    }

}
