import { getWeather } from './getWeather.js';

function formatDates(datesArray) {
  return datesArray.map(dateString => {
    const date = new Date(dateString);
    const month = date.toLocaleString('default', { month: 'short' });
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${month} ${day}, ${hours}:${minutes}`;
  });
}


var limit
function updateChart(chart, seriesTemperature, seriesHumidity) {

  async function fetchDataAndUpdateChart() {
    limit = document.getElementById('limit').value;
    if (limit.trim().length === 0 || isNaN(limit)) {
      limit = 10;
    }
    const { tempratureArray, humidityArray, datesArray } = await getWeather(limit);
    const updatedFormattedDates = formatDates(datesArray);

    chart.xAxis[0].setCategories(updatedFormattedDates.reverse());
    seriesTemperature.setData(tempratureArray.reverse(), true, true);
    seriesHumidity.setData(humidityArray.reverse(), true, true);
  }

  fetchDataAndUpdateChart();

  setInterval(fetchDataAndUpdateChart, 1000);
}

export function showChart() {
  const chart = Highcharts.chart('container', {
    chart: {
      type: 'line',
      events: {
        load: function() {
          const seriesTemperature = this.series[0];
          const seriesHumidity = this.series[1];
          updateChart(this, seriesTemperature, seriesHumidity);
        }
      }
    },
    accessibility: {
      description: 'ok'
    },
    title: {
      text: 'Recent temprature and humidity'
    },
    xAxis: {

      type: 'category',
    },
    yAxis: {
      title: {
        text: 'Temprature in Celsius'
      }
    },
    tooltip: {
      pointFormat: '{series.name} {point.y}'
    },
    plotOptions: {
      area: {
        pointStart: 0,
        marker: {
          enabled: false,
          symbol: 'circle',
          radius: 2,
          states: {
            hover: {
              enabled: true
            }
          }
        }
      }
    },
    series: [{
      name: 'temprature',
    }, {
      name: 'humidity',
    }],

    accessibility: {
      enabled: false
    },
    credits: {
      enabled: false
    }
  });
}
