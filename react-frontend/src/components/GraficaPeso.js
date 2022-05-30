import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: '18/05',
      actual: 65,
      meta: 70,
    },
    {
      name: '30/05',
      actual: 60,
      meta: 70,
    },
    {
      name: '10/06',
      actual: 68,
      meta: 70,
      amt: 2290,
    },
    {
      name: '20/06',
      actual: 65,
      meta: 70,
      amt: 2000,
    },
    {
      name: '25/06',
      actual: 60,
      meta: 70,
      amt: 2181,
    },
    {
      name: '1/07',
      actual: 55,
      meta: 70,
      amt: 2500,
    },
  ];


function GraficaPeso() {
    return (
      
        <ResponsiveContainer class="mx-auto" width="100%" aspect={3}>
        <LineChart
          width={400}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="actual" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="meta" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
      
    );
  }
  
  export default GraficaPeso;