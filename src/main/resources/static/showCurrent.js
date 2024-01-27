import { getWeather, getWeatherAverage } from './getWeather.js';


export async function showCurrent() {
   const { tempratureArray } = await getWeather(1);
   const element = document.getElementById("current");
   element.innerHTML = tempratureArray[0]
}
/* 
export async function showAverage(){
   const { value } = await getWeatherAverage();
   console.log(value);
   const element = document.getElementById("average");
   element.innerHTML = value;
}
 */