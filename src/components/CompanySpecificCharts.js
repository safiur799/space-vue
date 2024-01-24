import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

const CompanySpecificChart = ({ data }) => {
  const formattedData = Object.keys(data).map((year) => ({
    year: parseInt(year),
    rocketCount: data[year],
  }));

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-4">
        No of Rockets Over the Year
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={formattedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="rocketCount" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CompanySpecificChart;
