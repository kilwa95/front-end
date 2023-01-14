import axios from "axios";
import React, { useState, useEffect } from "react";
import Forecast from "./Forecast";

const ListForecast: React.FC = () => {
  const [ forecasts, setForecasts ] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:4000//weather/75101");
      setForecasts(result.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Forecast</h1>
      <ul>
        {forecasts.map((forecast) => (
          <Forecast key={forecast.id} forecast={forecast} />
        ))}
      </ul>
    </div>
  );
};

export default ListForecast;
