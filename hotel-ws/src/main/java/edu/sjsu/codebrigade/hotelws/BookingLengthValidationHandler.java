package edu.sjsu.codebrigade.hotelws;

import java.time.LocalDate;

public class BookingLengthValidationHandler extends BookingValidationHandler {
    @Override
    public boolean isOkay(LocalDate checkin, LocalDate checkout) throws ValidationException {
        if (checkin.plusDays(8).isAfter(checkout))
            return validationStepPassed(checkin, checkout);
        throw new ValidationException("booking cannot exceed 7 days");
    }
}
