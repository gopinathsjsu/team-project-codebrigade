package edu.sjsu.codebrigade.hotelws.validation;

import java.time.LocalDate;

/**
 * Chain of Responsiblity pattern
 */
public abstract class BookingValidationHandler {
    protected BookingValidationHandler next;

    public void setNext(BookingValidationHandler next) {
        this.next = next;
    }

    public abstract boolean isOkay(LocalDate checkin, LocalDate checkout) throws ValidationException;

    public static class ValidationException extends Exception {
        public ValidationException(String msg) {
            super(msg);
        }
    }

    protected boolean validationStepPassed(LocalDate checkin, LocalDate checkout) throws ValidationException {
        return next == null || next.isOkay(checkin, checkout);
    }
}
