import styled from "styled-components";
import { NativeSelect, FormControl } from "@material-ui/core";
import { fetchCountriesName } from "../api/axios";
import { useEffect, useState } from "react";

const CountryPicker = ({ handleCountryChange }) => {
  const [CountriesName, setCountriesName] = useState([]);

  useEffect(() => {
    const countriesNames = async () => {
      setCountriesName(await fetchCountriesName());
    };
    countriesNames();
  }, [setCountriesName]);

  return (
    <Container>
      <FormControl>
        <NativeSelect
          defaultValue=""
          onChange={(e) => {
            handleCountryChange(e.target.value);
          }}
        >
          <option value="Global">Global</option>
          {CountriesName.map((country, index) => (
            <option value={country} key={index}>
              {country}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </Container>
  );
};

export default CountryPicker;

const Container = styled.div`
  margin-bottom: 30px;

  .formControl {
    width: 30%;
  }

  select {
    padding-left: 10px;
  }
`;
