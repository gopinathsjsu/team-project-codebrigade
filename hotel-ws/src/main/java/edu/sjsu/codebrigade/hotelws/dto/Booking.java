package edu.sjsu.codebrigade.hotelws.dto;

public class Booking {

    private long id;
    private final String firstName;
    private final String lastName;
    private final String creditCard;
    private final short cvc;

    public Booking(long id, String firstName, String lastName, String creditCard, short cvc) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.creditCard = creditCard;
        this.cvc = cvc;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {this.id = id;}

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }
}