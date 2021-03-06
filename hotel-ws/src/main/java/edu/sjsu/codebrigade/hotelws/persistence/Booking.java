package edu.sjsu.codebrigade.hotelws.persistence;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.time.LocalDate;

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

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    @Column(name = "checkin")
    private LocalDate checkin;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    @Column(name = "checkout")
    private LocalDate checkout;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "email")
    private String email;

    @Column(name = "address")
    private String address;

    @Column(name = "city")
    private String city;

    @Column(name = "state")
    private String state;

    @Column(name = "credit_card")
    @Convert(converter = CreditCardConverter.class)
    private String creditCard;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    @Column(name = "expiry")
    private LocalDate expiry;

    @Column(name = "cvc")
    private int cvc;

    @Column(name = "hotelName")
    private String hotelName;

    @Column(name = "roomType")
    private String roomType;

    @Transient
    private String zip;

    @Transient
    private boolean rewardsChecked;

    public boolean isCrib() {
        return getOptionBit(1);
    }

    public void setCrib(boolean crib) {
        setOptionBit(crib, 1);
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
    private boolean breakfast;

    @Transient // do not persist this field
    private boolean crib;

    @Transient // do not persist this field
    private boolean fitness;

    @Transient // do not persist this field
    private boolean late;

    @Transient // do not persist this field
    private boolean meals;

    @Transient // do not persist this field
    private boolean parking;

    @Transient // do not persist this field
    private boolean pool;

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

    public LocalDate getExpiry() {
        return expiry;
    }

    public void setExpiry(LocalDate expiry) {
        this.expiry = expiry;
    }

    public Integer getCvc() {
        return cvc;
    }

    public void setCvc(int cvc) {
        this.cvc = cvc;
    }

    public LocalDate getCheckin() {
        return checkin;
    }

    public void setCheckin(LocalDate checkin) {
        this.checkin = checkin;
    }

    public LocalDate getCheckout() {
        return checkout;
    }

    public void setCheckout(LocalDate checkout) {
        this.checkout = checkout;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getHotelName() {
        return hotelName;
    }

    public void setHotelName(String hotelName) {
        this.hotelName = hotelName;
    }

    public String getRoomType() {
        return roomType;
    }

    public void setRoomType(String roomType) {
        this.roomType = roomType;
    }

    public boolean isBreakfast() {
        return breakfast;
    }

    public void setBreakfast(boolean breakfast) {
        this.breakfast = breakfast;
    }

    public boolean isFitness() {
        return fitness;
    }

    public void setFitness(boolean fitness) {
        this.fitness = fitness;
    }

    public boolean isLate() {
        return late;
    }

    public void setLate(boolean late) {
        this.late = late;
    }

    public boolean isMeals() {
        return meals;
    }

    public void setMeals(boolean meals) {
        this.meals = meals;
    }

    public boolean isParking() {
        return parking;
    }

    public void setParking(boolean parking) {
        this.parking = parking;
    }

    public boolean isPool() {
        return pool;
    }

    public void setPool(boolean pool) {
        this.pool = pool;
    }

    public boolean isRewardsChecked() {
        return rewardsChecked;
    }

    public void setRewardsChecked(boolean rewardsChecked) {
        this.rewardsChecked = rewardsChecked;
    }

    public String getZip() {
        return zip;
    }

    public void setZip(String zip) {
        this.zip = zip;
    }
}
