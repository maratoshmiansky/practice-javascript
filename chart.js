document.addEventListener('DOMContentLoaded', function () {
  const chart = Highcharts.chart('container', {
    chart: {
      type: 'spline'
    },
    title: {
      text: 'Fruit Consumption'
    },
    xAxis: {
      categories: ['Plums', 'Apricots', 'Peaches', "Nectarines"]
    },
    yAxis: {
      title: {
        text: 'Fruit eaten'
      }
    },
    series: [{
      name: 'Bart',
      data: [3, 2, 7, 0]
    }, {
      name: 'Lisa',
      data: [1, 9, 4, 2]
    }, {
      name: 'Maggie',
      data: [12, 2, 0, 5]
    }, {
      name: 'Homer',
      data: [23, 37, 41, 17]
    }, {
      name: 'Marge',
      data: [3, 3, 1, 2]
    }]
  });
});