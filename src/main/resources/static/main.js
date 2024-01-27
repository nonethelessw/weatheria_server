import { getWeatherAverage, getWeatherMax, getWeatherMin } from './getWeather.js';
import { showChart } from './showAreaChart.js';
import { showCurrent } from './showCurrent.js'

showChart();
showCurrent();
getWeatherAverage();
getWeatherMax();
getWeatherMin();

setInterval(showCurrent, 1000);
setInterval(getWeatherAverage, 1000);
setInterval(getWeatherMax, 1000);
setInterval(getWeatherMin, 1000);
