package edu.sjsu.codebrigade.hotelws;

import java.time.LocalDate;

public class BookingCheckoutValidationHandler extends BookingValidationHandler {
    @Override
    public boolean isOkay(LocalDate checkin, LocalDate checkout) throws ValidationException {
        if (checkin != null && checkout != null && !checkin.isAfter(checkout))
            return validationStepPassed(checkin, checkout);
        throw new ValidationException("booking cannot exceed 7 days");
    }
}
