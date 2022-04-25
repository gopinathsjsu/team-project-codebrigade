package edu.sjsu.codebrigade.hotelws.dto;


import java.util.Set;

public class Hotel {

    public Hotel(){

    }

    public Hotel(int id, String name, int companyId, int cityId){
        this.id = id;
        this.name = name;
        this.companyId = companyId;
        this.cityId = cityId;
    }

    private int id;

    private String name;

    private int companyId;

    private int cityId;

    private String desc;

    private String address;

    private int price;

    private Set<Room> roomList;

    private String imageUrl;

    public void setId(Integer id) {
        this.id = id;
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
    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Set<Room> getRoomList() {
        return roomList;
    }

    public void setRoomList(Set<Room> roomList) {
        this.roomList = roomList;
    }

    public String getImage() {
        return imageUrl;
    }

    public void setImage(String image) {
        this.imageUrl = imageUrl;
    }
}