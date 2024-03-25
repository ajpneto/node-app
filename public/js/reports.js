fetch('/reports').then((response) => {
    response.json().then((data) => {
        if (data.error) {
            console.log(data.error)
        } else {


const bar = data.categories.bar;
const line = data.categories.lines;
//const pie = JSON.parse(document.querySelector('#pieChart').dataset.pie)
//const area = JSON.parse(document.querySelector('#areaChart').dataset.area)
console.table(bar)

const barColors = ["red", "green","blue","orange","brown"];
new Chart("barChart", {
  type: "bar",
  data: {
    labels: bar[0],
    datasets: [{
      backgroundColor: barColors,
      data: bar[1]
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: false,
      text: "World Wine Production 2018"
    }
  }
});


const xValues = [100,200,300,400,500,600,700,800,900,1000]
new Chart("lineChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      data: line[0],
      borderColor: 'red',
      fill: false
    }, {
      data: line[1],
      borderColor: 'green',
      fill: false
    }, {
      data: line[2],
      borderColor: 'blue',
      fill: false
    }]
  },
  options: {
    legend: {display: false}
  }
});


const bar2Colors = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9",
  "#1e7145"
];

new Chart("pieChart", {
  type: "pie",
  data: {
    labels: bar[0],
    datasets: [{
      backgroundColor: bar2Colors,
      data: bar[1]
    }]
  },
  options: {
    title: {
      display: false,
      text: "World Wide Wine Production 2018"
    }
  }
});

// Area Chart Example
var ctx = document.getElementById("areaChart");
new Chart(ctx, {
  type: 'line',
  data: {
    labels: bar[0],
    datasets: [{
      label: "Sessions",
      lineTension: 0.3,
      backgroundColor: "rgba(2,117,216,0.2)",
      borderColor: "rgba(2,117,216,1)",
      pointRadius: 5,
      pointBackgroundColor: "rgba(2,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(2,117,216,1)",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      data: bar[1],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 4,
          maxTicksLimit: 5
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: false
    }
  }
});

        }
    });
});
