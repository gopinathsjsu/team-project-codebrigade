package edu.sjsu.codebrigade.hotelws.dto;

public class Hotel {

    private long id;
    private String name;

    public Hotel(long id, String name) {
        this.id = id;
        this.name = name;
    }

    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }
}