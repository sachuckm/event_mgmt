import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Zoom from "@material-ui/core/Zoom";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    // maxWidth: 345,
  },
  media: {
    objectFit: "cover",
  },
  actionArea: {
    "&:hover $focusHighlight": {
      opacity: 0,
    },
  },
  focusHighlight: {},
};

const ImgMediaCard = ({
  classes,
  cardTitle,
  cardImg,
  cardDescription,
  redirectLink,
  openProperty,
  type = "portrait",
}) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <Zoom in={checked}>
      <Paper elevation={4} className={classes.paper}>
        <Card onClick={openProperty}>
          <CardActionArea
            classes={{
              root: classes.actionArea,
              focusHighlight: classes.focusHighlight,
            }}
          >
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              className={classes.media}
              image={cardImg}
              title="Contemplative Reptile"
              style={{ height: "70vh" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {cardTitle}
              </Typography>
              <Typography component="p">{cardDescription}</Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Read more...
            </Button>
          </CardActions>
        </Card>
      </Paper>
    </Zoom>
  );
};

ImgMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImgMediaCard);
