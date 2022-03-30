package edu.sjsu.codebrigade.hotelws.dto;

public class Hotel {

    private int id;
    private String name;

    public Hotel(int id, String name) {
        this.id = id;
        this.name = name;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }
}