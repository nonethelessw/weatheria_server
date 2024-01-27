import { getWeather } from './getWeather.js';

function formatDates (datesArray) {
  return datesArray.map(dateString => {
    const date = new Date(dateString);
    const month = date.toLocaleString('default', { month: 'short' });
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${month} ${day}, ${hours}:${minutes}`;
  });
}

export function showChart() {

  const chart = Highcharts.chart('container', {
    chart: {
      type: 'line',
      events: {

        load: async function() {
          const seriesTemperature = this.series[0];
          const seriesHumidity = this.series[1];

          // we call the database once on init
          const { tempratureArray, humidityArray, datesArray } = await getWeather(10);

          const formattedDates = formatDates(datesArray);

          chart.xAxis[0].setCategories(formattedDates.reverse());

          seriesTemperature.setData(tempratureArray.reverse(), true, true);
          seriesHumidity.setData(humidityArray.reverse(), true, true);

          setInterval(async function() {
          // we call the database every 1 second
            const { tempratureArray, humidityArray, datesArray } = await getWeather(10);
            const updatedFormattedDates = formatDates(datesArray);

            chart.xAxis[0].setCategories(updatedFormattedDates.reverse());
            seriesTemperature.setData(tempratureArray.reverse(), true, true);
            seriesHumidity.setData(humidityArray.reverse(), true, true);
          }, 1000);
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
