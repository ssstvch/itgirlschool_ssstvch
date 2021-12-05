import './App.css';
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

const statistic = [
  {name: "React.js", downloads: 11323150},
  {name: "Vue.js", downloads: 2674968},
  {name: "Angular.js", downloads: 2628607},
  {name: "jQuery", downloads: 3876336},
  {name: "Express.js", downloads: 17211715},
];

const get_frameworks = (array) => {
  let new_array = [];
  for(let i = 0; i < array.length; i++) {
    new_array[i] = array[i].name;
  }
  return new_array;
};

const get_downloads = (array) => {
  let new_array = [];
  for(let i = 0; i < array.length; i++) {
    new_array[i] = array[i].downloads;
  }
  return new_array;
};

const frameworks = get_frameworks(statistic);
const downloads = get_downloads(statistic);

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: frameworks,
  datasets: [
    {
      label: '# of Votes',
      data: downloads,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export default function App() {
  return (
    <div className="chart">
      <h1 className="chart__title">npm downloads</h1>
      <div className="chart__container">
        <Pie data={data} className="chart__canva" />;
      </div>
      
    </div>
  )
}