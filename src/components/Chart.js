import { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchDailyData } from "../api/axios";
import { Line, Bar } from "react-chartjs-2";

const Chart = ({ data, country }) => {
  const [DailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchDaily = async () => {
      if (country === "Global") {
        setDailyData(await fetchDailyData());
      }
    };
    fetchDaily();
  }, []);

  const lineChart = DailyData ? (
    <Line
      data={{
        labels: DailyData.map(({ reportDate }) => reportDate),
        datasets: [
          {
            data: DailyData.map(({ confirmed: { total } }) => total),
            label: "Infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: DailyData.map(({ deaths: { total } }) => total),
            label: "Deaths",
            borderColor: "rgba(255, 0, 0, 0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  const barChart =
    data && country !== "Global" ? (
      <Bar
        data={{
          labels: ["Infected", "Recovered", "Deaths"],
          datasets: [
            {
              label: "People",
              backgroundColor: [
                "rgba(0, 0, 255, 0.5)",
                "rgba(0, 255, 0, 0.5)",
                "rgba(255, 0, 0, 0.5)",
              ],
              data: [
                data?.confirmed?.value,
                data?.recovered?.value,
                data?.deaths?.value,
              ],
            },
          ],
        }}
        options={{
          legend: { display: false },
          title: { display: true, text: `Current state in ${country}` },
        }}
      />
    ) : null;

  return <Container>{country !== "Global" ? barChart : lineChart}</Container>;
};

export default Chart;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 65%;

  @media only screen and (max-width: 770px) {
    .container {
      width: 100%;
    }
  }
`;
