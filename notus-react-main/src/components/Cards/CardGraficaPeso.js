import React,{useEffect,useState} from "react";
import UserService from "services/user.service";
import AuthService from "services/auth.service";
import Chart from "chart.js";


export default function CardGraficaPeso() {

  const userID = AuthService.getCurrentUser().id;
  const [pesos, setPesos] = useState([]);
  const [pesoIdealMax, setPesoIdealMax] = useState(0);
  const [pesoIdealMin, setPesoIdealMin] = useState(0);
  const [date,setDate] = useState([]);

  function getOnlyWeight(item) {
    return item.weight;
  }

  function getOnlyDate(item) {
    const newDate = new Date(item.date);
    return newDate.getDate()+"/"+newDate.getMonth()+"/"+newDate.getFullYear();
  }

  useEffect(()=>{UserService.getUltimosPesosUsuario(userID).then(data => {
    setPesos(data.listaPesos);
}).catch(err => console.log(err));},[]);

useEffect(()=>{UserService.getUltimosPesosUsuario(userID).then(data => {
  setPesoIdealMax(Math.round(data.rangoPesoIdeal.max));
  setPesoIdealMin(Math.round(data.rangoPesoIdeal.min));
}).catch(err => console.log(err));});

  useEffect(() => {
    var config = {
      type: "line",
      data: {
        labels: pesos.map(getOnlyDate),
        datasets: [
          {
            label: "Peso ideal máx (kg)",
            backgroundColor: "rgba(0,0,0,0.2)",
            borderColor: "#239B56",
            data: [pesoIdealMax,pesoIdealMax,pesoIdealMax,pesoIdealMax,pesoIdealMax,pesoIdealMax,pesoIdealMax],
            fill: 1,
          },
          {
            label: "Peso ideal mín (kg)",
            backgroundColor: "rgba(0,0,0,0.2)",
            borderColor: "#239B56",
            data: [pesoIdealMin,pesoIdealMin,pesoIdealMin,pesoIdealMin,pesoIdealMin,pesoIdealMin,pesoIdealMin],
            fill: 1,
          },
          {
            label: "Peso (kg)",
            fill: false,
            backgroundColor: "#fff",
            borderColor: "#fff",
            data: pesos.map(getOnlyWeight),
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        legend: {
          labels: {
            fontColor: "white",
          },
          align: "end",
          position: "bottom",
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        scales: {
          xAxes: [
            {
              ticks: {
                fontColor: "rgba(255,255,255,.7)",
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Month",
                fontColor: "white",
              },
              gridLines: {
                display: false,
                borderDash: [2],
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.3)",
                zeroLineColor: "rgba(0, 0, 0, 0)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                fontColor: "rgba(255,255,255,.7)",
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Value",
                fontColor: "white",
              },
              gridLines: {
                borderDash: [3],
                borderDashOffset: [3],
                drawBorder: false,
                color: "rgba(255, 255, 255, 0.15)",
                zeroLineColor: "rgba(33, 37, 41, 0)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
        },
      },
    };
    var ctx = document.getElementById("line-chart").getContext("2d");
    window.myLine = new Chart(ctx, config);
  },[pesos]);
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blueGray-700">
        <div className="rounded-t mb-8 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h2 className="text-white text-xl font-semibold">Gráfica Peso</h2>
            </div>
          </div>
        </div>
        <div className="p-4 flex-auto">
          {/* Chart */}
          <div className="relative h-350-px">
            <canvas id="line-chart"></canvas>
          </div>
        </div>
      </div>
    </>
  );
}
