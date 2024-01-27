export async function getWeather(limit) {
  const response = await fetch(`http://192.168.101.12:8080/api/recent?limit=${limit}`);
  const data = await response.json();
  return {
    tempratureArray: data.map(entry => entry.temprature),
    humidityArray: data.map(entry => entry.humidity),
    datesArray: data.map(entry => entry.date)
  };
}

export async function getWeatherAverage() {
  const response = await fetch(`http://192.168.101.12:8080/api/todayAverage`);
  const value = await response.json(); 
  console.log(value);
  const element = document.getElementById("average");
  element.innerHTML = value;
}

export async function getWeatherMax() {
  const response = await fetch(`http://192.168.101.12:8080/api/todayMax`);
  const value = await response.json(); 
  const element = document.getElementById("max");
  element.innerHTML = value;
}

export async function getWeatherMin() {
  const response = await fetch(`http://192.168.101.12:8080/api/todayMin`);
  const value = await response.json(); 
  const element = document.getElementById("min");
  element.innerHTML = value;
}