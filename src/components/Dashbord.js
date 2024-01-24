import React, { useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import CompanySpecificChart from "./CompanySpecificCharts";
import { countRocketsByYear } from "./RocketCountByYear";

const Dashboard = ({ missions }) => {
  const columnDefs = [
    { headerName: "Mission Name", field: "mission" },
    { headerName: "Company", field: "company" },
    { headerName: "Location", field: "location" },
    { headerName: "Date", field: "date" },
    { headerName: "Time", field: "time" },
    { headerName: "Rocket", field: "rocket" },
    { headerName: "Price", field: "price" },
    { headerName: "Successful", field: "successful" },
  ];

  const successfulCount = missions.filter(
    (mission) => mission.successful
  ).length;
  const failureCount = missions.length - successfulCount;

  const chartData = [
    { name: "Success", value: successfulCount },
    { name: "Failure", value: failureCount },
  ];

  const RocketData = countRocketsByYear(missions);

  return (
    <div className="min-h-screen p-8 " style={{ marginLeft: "300px" }}>
      <h2 className="text-3xl font-semibold mb-6 text-center">
        Space Mission Dashboard
      </h2>
      <div>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <CompanySpecificChart data={RocketData} />
      <div
        className="ag-theme-alpine mb-8 mt-8"
        style={{ height: "400px", width: "100%", marginBottom: "24px" }}
      >
        <AgGridReact
          columnDefs={columnDefs}
          rowData={missions}
          pagination={true}
          domLayout="autoHeight"
          paginationPageSize={10}
        ></AgGridReact>
      </div>
    </div>
  );
};

export default Dashboard;
