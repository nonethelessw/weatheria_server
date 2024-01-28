const ip = "http://172.28.106.242:8080";
export async function getWeather(limit) {
  const response = await fetch(`${ip}/api/recent?limit=${limit}`);
  const data = await response.json();
  return {
    tempratureArray: data.map(entry => entry.temprature),
    humidityArray: data.map(entry => entry.humidity),
    datesArray: data.map(entry => entry.date)
  };
}

export async function getWeatherAverage() {
  const response = await fetch(`${ip}/api/todayAverage`);
  const value = await response.json(); 
  console.log(value);
  const element = document.getElementById("average");
  element.innerHTML = value;
}

export async function getWeatherMax() {
  const response = await fetch(`${ip}/api/todayMax`);
  const value = await response.json(); 
  const element = document.getElementById("max");
  element.innerHTML = value;
}

export async function getWeatherMin() {
  const response = await fetch(`${ip}/api/todayMin`);
  const value = await response.json(); 
  const element = document.getElementById("min");
  element.innerHTML = value;
}
