
var options = {
    series: [
        {
          name: "Discharges By Interval",
          type: "column",
          data: [0, 1, 16, 11, 5, 2, 0, 0, 0, 0],
        },
        {
          name: "Avg Time",
          type: "line",
          data: [ , "02.18", "02.57", "02.32", "01.45", , , , , ],
        },
      ],

    grid: {
        xaxis: {
            lines: {
              show: false,
            },
          },
     
        yaxis: {
            lines: {
             show: false,
        },
      },
    },
  
    colors: ["#FD6A6A", "#041D8E"],
  
    plotOptions: {
      bar: {
        horizontal: false,
        dataLabels: {
          position: "bottom",
        },
      },
    },

    chart: {
      height: 400,
      type: "line",
    },
  
    stroke: {
      width: [0, 2],
      curve: "smooth",
    },
  
    dataLabels: {
      enabled: true,
      enabledOnSeries: [0,1]
    },

    labels: [
      "12AM-06PM",
      "06AM-08AM",
      "08AM-10AM",
      "10AM-12PM",
      "12PM-02PM",
      "02PM-04PM",
      "04PM-06PM",
      "06PM-08PM",
      "08PM-10PM",
      "10PM-12AM",
    ],
    
    yaxis: [
      {
        show: false,
      },
      {
        opposite: false,
        show: false,
      },
    ],

    annotations: {
        yaxis: [
          {
            y: 10,
            borderColor: '#00E396',
            label: {
                borderColor: '#ffffff',
              style: {
                color: '#00E396'
              },
              text: "Avg-10"
            }
          }
        ]
      },
  };
  
  var chart = new ApexCharts(document.querySelector("#Chart"), options);
  chart.render();