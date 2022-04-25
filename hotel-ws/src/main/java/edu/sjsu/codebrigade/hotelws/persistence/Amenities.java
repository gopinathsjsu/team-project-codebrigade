package edu.sjsu.codebrigade.hotelws.persistence;



import javax.persistence.*;

@Entity
@Table(name = "amenities")
public class Amenities {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "name")
    private String name;

    @Column(name = "desc")
    private String desc;

    @Column(name = "hotel_id")
    private int hotelId;

    @Column(name = "price")
    private int price;

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "hotel_id", referencedColumnName = "bookId", nullable = false)
    public int getHotelId() {
        return hotelId;
    }

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

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

    public void setHotelId(int hotelId) {
        this.hotelId = hotelId;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }
}
