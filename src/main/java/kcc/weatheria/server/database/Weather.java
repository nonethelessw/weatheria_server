package kcc.weatheria.server.database;

import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Weather{
  @Id
  @GeneratedValue(strategy=GenerationType.IDENTITY)  
  private int id;

  @DateTimeFormat(pattern = "yyyy/MM/dd hh:mm")
  @Column(name="date")
  private Date date;

  @Column(name="temprature")
  private int temprature;

  @Column(name="humidity")
  private int humidity;

  public void setId(int id){
    this.id = id;
  }
  public void setDate(Date date){
    this.date = date;
  }
  public void setTemprature(Integer temprature){
    this.temprature = temprature;
  }
  public void setHumidity(Integer humidity){
    this.humidity = humidity;
  }

  public int getId(){
    return id;
  }

  public Date getDate(){
    return date;
  }
  public int getTemprature(){
    return temprature;
  }
  public int getHumidity(){
    return humidity;
  }
}

