import styled from "styled-components";
import { Grid } from "@material-ui/core";
import SingleCard from "./SingleCard";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  const lastUpdateDate = new Date(lastUpdate).toDateString();
  return (
    <Container>
      <Grid container spacing={3} justify="center">
        <SingleCard
          className="infected"
          title="Infected"
          value={confirmed.value}
          lastUpdateDate={lastUpdateDate}
          description="Number of active cases of COVID-19"
        />
        <SingleCard
          className="recovered"
          title="Recoveries"
          value={recovered.value}
          lastUpdateDate={lastUpdateDate}
          description="Number of recoveries from COVID-19"
        />
        <SingleCard
          className="deaths"
          title="Deaths"
          value={deaths.value}
          lastUpdateDate={lastUpdateDate}
          description="Number of deaths caused by COVID-19"
        />
      </Grid>
    </Container>
  );
};

export default Cards;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0;

  .infected {
    border-bottom: 10px solid rgba(0, 0, 255, 0.5);
  }

  .recovered {
    border-bottom: 10px solid rgba(0, 255, 0, 0.5);
  }

  .deaths {
    border-bottom: 10px solid rgba(255, 0, 0, 0.5);
  }

  .card {
    margin: 0 2% !important;
  }
  @media only screen and (max-width: 770px) {
    .card {
      margin: 2% 0px !important;
      max-width: 70vw;
    }
  }
`;
