import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";

const SingleCard = ({
  className,
  title,
  value,
  lastUpdateDate,
  description,
}) => {
  return (
    <Grid item component={Card} className={`card ${className}`} xs={12} md={3}>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h5">
          <CountUp start={0} end={value} duration={2.5} separator="," />
        </Typography>
        <Typography color="textSecondary">{lastUpdateDate}</Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
    </Grid>
  );
};

export default SingleCard;
