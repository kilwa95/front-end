import axios from "axios";
import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { City } from "../models/City";

import "./CityTabel.css";

const CityTable: React.FC = () => {
  const [ cities, setCities ] = useState<City[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:4000/cities");
      setCities(result.data);
    };
    fetchData();
  }, []);
  return (
    <Table className="table" striped bordered hover>
      <thead>
        <tr>
          <th className="th">code insee</th>
          <th className="th">city</th>
          <th className="th">Population</th>
        </tr>
      </thead>
      <tbody>
        {cities.map((city) => (
          <tr className="tr" key={city.id}>
            <td className="td">{city.insee}</td>
            <td className="td">{city.name}</td>
            <td className="td">{city.population}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default CityTable;
