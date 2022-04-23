package edu.sjsu.codebrigade.hotelws.persistence;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "hotel")
public class Hotel {

    public Hotel(int id, String name, int companyId, int cityId){
        this.id = id;
        this.name = name;
        this.companyId = companyId;
        this.cityId = cityId;
    }

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "name")
    private String name;

    @Column(name = "company_id")
    private int companyId;

    @Column(name = "city_id")
    private int cityId;

    @Column(name = "desc")
    private String desc;

    @Column(name = "address")
    private String address;

    @Column(name = "price")
    private int price;

    @Column(name = "image")
    private String imageUrl;

    @OneToMany(mappedBy = "hotelId", fetch = FetchType.LAZY,
            cascade = CascadeType.ALL)
    @JsonIgnoreProperties("hotelId")
    private Set<Room> rooms;

    @OneToMany(mappedBy = "hotelId", fetch = FetchType.EAGER,
            cascade = CascadeType.ALL)
    @JsonIgnoreProperties("hotelId")
    private Set<Amenities> amenities;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getCompanyId() {
        return companyId;
    }

    public void setCompanyId(int companyId) {
        this.companyId = companyId;
    }

    public int getCityId() {
        return cityId;
    }

    public void setCityId(int cityId) {
        this.cityId = cityId;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public Set<Room> getRooms() {
        return rooms;
    }

    public void setRooms(Set<Room> rooms) {
        this.rooms = rooms;
    }

    public String getImage() {
        return imageUrl;
    }

    public void setImage(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public Set<Amenities> getAmenities() {
        return amenities;
    }

    public void setAmenities(Set<Amenities> amenities) {
        this.amenities = amenities;
    }
}