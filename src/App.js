import styled from "styled-components";
import { useEffect, useState } from "react";

import { Cards, Chart, CountryPicker } from "./components";
import { fetchData } from "./api/axios";

import { MoonLoader } from "react-spinners";
import { css } from "@emotion/core";

const App = () => {
  const [data, setdata] = useState({});
  const [Country, setCountry] = useState("Global");

  const handleCountryChange = async (countryname) => {
    const fullData = async () => {
      setdata(await fetchData(countryname));
      setCountry(countryname);
    };
    fullData();
  };

  useEffect(() => {
    const fullData = async () => {
      setdata(await fetchData());
    };
    fullData();
  }, []);

  const override = css`
    top: 40vh;
  `;

  if (!data.confirmed) {
    return (
      <Container>
        <MoonLoader size={100} css={override} color={"#36D7B7"} />
      </Container>
    );
  } else {
    return (
      <Container>
        <Cards data={data} />
        <CountryPicker handleCountryChange={handleCountryChange} />
        <Chart country={Country} data={data} />
      </Container>
    );
  }
};

export default App;

const Container = styled.div`
  display: grid;
  place-items: center;
`;
