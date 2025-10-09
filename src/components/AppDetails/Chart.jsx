import React from "react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const Chart = ({ data }) => {
  return (
    <ResponsiveContainer
      width="100%"
      height={400}
      className="focus-visible:outline-0"
    >
      <BarChart data={data} layout="vertical">
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" />
        <Bar dataKey="count" fill="#FF8811" barSize={32} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Chart;
