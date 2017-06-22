$.get('http://repairnator.lille.inria.fr/repairnator-mongo-api/inspectors/statusStats', function (data) {
  var htmlElement = $('<div></div>');
  $('#charts').append(htmlElement);

  Highcharts.chart({
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie',
      renderTo: htmlElement[0]
    },
    title: {
      text: 'Build statuses'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %',
          style: {
            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
          }
        }
      }
    },
    series: [{
      name: 'Statuses',
      colorByPoint: true,
      data: data.map(function (d) {
        return {
          name: d._id,
          y: d.counted
        }
      })
    }]
  });
});