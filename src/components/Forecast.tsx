import React from "react";

interface ForecastProps {
  forecast: any;
}

const Forecast: React.FC<ForecastProps> = ({ forecast }) => {
  return (
    <div>
      <li key={forecast.id}>
        {forecast.city.name} - {forecast.date} - {forecast.temperature}
      </li>
    </div>
  );
};

export default Forecast;
