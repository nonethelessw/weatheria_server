package kcc.weatheria.server.database;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UserRepository extends JpaRepository<Weather, Integer>{
  @Query(value = "select * from weather order by date desc limit ?1", nativeQuery = true)
  List<Weather> recentWeather(int limit);

  @Query(value = "select avg(temprature) from weather where date > ?1", nativeQuery = true)
  String todayAverage(String date);

  @Query(value = "select max(temprature) from weather where date > ?1", nativeQuery = true)
  String todayMax(String date);

  @Query(value = "select min(temprature) from weather where date > ?1", nativeQuery = true)
  String todayMin(String date);
  
}
