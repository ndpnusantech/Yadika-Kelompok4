import React from "react";
import { Bar, Pie, PolarArea } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function BarChart({ chartData }) {
  return (
      <div className="chart-container">
        <ul>
          <li>
            <Bar className="Bar" data={chartData} />
          </li>
          <li>
            <PolarArea className="PolarArea" data={chartData} />
          </li>
        </ul>
        {/* <Pie data={chartData} />; */}
      </div>
  )
}

export default BarChart;
