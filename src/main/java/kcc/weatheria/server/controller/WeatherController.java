package kcc.weatheria.server.controller;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import kcc.weatheria.server.database.UserRepository;
import kcc.weatheria.server.database.Weather;

@Controller
@ResponseBody
@RequestMapping(path="/api") 
class WeatherController{
  @Autowired
  private UserRepository userRepository;

  @PostMapping("/weather")
  public String SaveIntoDatabase(@RequestParam String temprature, @RequestParam String humidity, @RequestParam String timing){
    return "Saving into database\nTemprature: " + temprature + "\nHumidity: " + humidity + "\nTiming: " + timing;
  }

  @GetMapping(path="/all")
  public @ResponseBody Iterable<Weather> getAllWeathers(){
    return userRepository.findAll();
  }

  @GetMapping(path="/recent")
  public @ResponseBody Iterable<Weather> weatherDate(@RequestParam(required = false, defaultValue = "5") int limit){
    return userRepository.recentWeather(limit);
  }
  
  @GetMapping(path="/todayAverage")
  public String getTodayAverage(){
    SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd");
    String date = df.format(new Date());
    return userRepository.todayAverage(date);
  }

  @GetMapping(path="/todayMax")
  public String getTodayMax(){
    SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd");
    String date = df.format(new Date());
    return userRepository.todayMax(date);
  }

  @GetMapping(path="/todayMin")
  public String getTodayMin(){
    SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd");
    String date = df.format(new Date());
    return userRepository.todayMin(date);
  }
}
