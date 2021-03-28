import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import ReactStars from "react-rating-stars-component";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 400,
    // maxWidth:300,
  },
});

export default function MovieCard({ movie, handleDelete }) {
  const { title, description, posterUrl, rating, id, about } = movie;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={posterUrl}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          onClick={() => window.open(about)}
          variant="contained"
          color="primary"
          size="small"
        >
          Learn More
        </Button>
        <Button
          onClick={() => handleDelete(id)}
          size="small"
          variant="contained"
          color="secondary"
        >
          Delete
        </Button>
      </CardActions>
      <div>
        <ReactStars name="rate1" starCount={5} value={rating} />
      </div>
    </Card>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.object,
  title: PropTypes.string,
  description: PropTypes.string,
  posterUrl: PropTypes.string,
  rating: PropTypes.number,
  handleDelete: PropTypes.func,
};
