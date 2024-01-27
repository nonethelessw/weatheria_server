package kcc.weatheria.server.database;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
class Connection{
  @Autowired
  private UserRepository userRepository;

  @PostMapping(path="/api/add")
  public @ResponseBody String addNewWeather(@RequestParam int humidity, @RequestParam int temprature){
    Weather w = new Weather();
    w.setDate(new Date());
    w.setHumidity(humidity);
    w.setTemprature(temprature);
    userRepository.save(w);
    return "saved";
  }

}
