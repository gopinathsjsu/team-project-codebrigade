package edu.sjsu.codebrigade.hotelws.persistence;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "booking")
@Access(AccessType.FIELD)
public class Booking {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "room_id")
    private int roomId;

    @Column(name = "checkin")
    private Date checkin;

    @Column(name = "checkout")
    private Date checkout;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "address")
    private String address;

    @Column(name = "city")
    private String city;

    @Column(name = "state")
    private String state;

    @Column(name = "credit_card")
    @Convert(converter = CreditCardConverter.class)
    private String creditCard;

    @Column(name = "expiry")
    private Date expiry;

    @Column(name = "cvc")
    private int cvc;

    public boolean isPet() {
        return getOptionBit(1);
    }

    public void setPet(boolean pet) {
        setOptionBit(pet, 1);
    }

    public boolean isCrib() {
        return getOptionBit(2);
    }

    public void setCrib(boolean crib) {
        setOptionBit(crib, 2);
    }

    public boolean isLateCheckout() {
        return getOptionBit(3);
    }

    public void setLateCheckout(boolean lateCheckout) {
        setOptionBit(lateCheckout, 3);
    }

    public boolean isExtraTowels() {
        return getOptionBit(4);
    }

    public void setExtraTowels(boolean extraTowels) {
        setOptionBit(extraTowels, 4);
    }

    @Transient // do not persist this field
    private boolean pet;

    @Transient // do not persist this field
    private boolean crib;

    @Transient // do not persist this field
    private boolean lateCheckout;

    @Transient // do not persist this field
    private boolean extraTowels;

    @Access(AccessType.PROPERTY) // persist this property instead
    @Column(name = "options")
    private Integer options;

    @JsonIgnore
    public Integer getOptions() {
        return options;
    }

    @JsonIgnore
    public void setOptions(Integer options) {
        this.options = options;
    }

    private void setOptionBit(boolean v, int n) {
        if (this.options == null)
            this.options = 0;
        if (v)
            this.options |= 1 << n;
        else
            this.options &= ~(1 << n);
    }

    private boolean getOptionBit(int n) {
        return this.options != null && (this.options & 1 << n) != 0;
    }


    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "room_id", referencedColumnName = "id", nullable = false)
    public Integer getRoomId() {
        return roomId;
    }

    public void setRoomId(int roomId) {
        this.roomId = roomId;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getCreditCard() {
        return creditCard;
    }

    public void setCreditCard(String creditCard) {
        this.creditCard = creditCard;
    }

    public Date getExpiry() {
        return expiry;
    }

    public void setExpiry(Date expiry) {
        this.expiry = expiry;
    }

    public Integer getCvc() {
        return cvc;
    }

    public void setCvc(int cvc) {
        this.cvc = cvc;
    }

    public Date getCheckin() {
        return checkin;
    }

    public void setCheckin(Date checkin) {
        this.checkin = checkin;
    }

    public Date getCheckout() {
        return checkout;
    }

    public void setCheckout(Date checkout) {
        this.checkout = checkout;
    }

}
