import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import { Button, Card } from "@material-ui/core";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function AddMovie({ onAdd }) {
  const [state, setState] = useState({
    title: "",
    description: "",
    posterUrl: "",
    rating: "",
    about: "",
  });
  const classes = useStyles();

  const handleChange = (event) => {
    const { value, name } = event.target;
    setState({ ...state, [name]: value });
  };
  const handleSubmit = () => {
    onAdd(state);
    setState({
      title: "",
      description: "",
      posterUrl: "",
      rating: "",
      about: "",
    });
  };

  const { title, description, posterUrl, rating, about } = state;
  return (
    <Card>
      <form className={classes.root} noValidate autoComplete="off">
        <FormControl variant="outlined">
          <InputLabel htmlFor="title">Title</InputLabel>
          <OutlinedInput
            id="title"
            name="title"
            value={title}
            required
            onChange={handleChange}
            label="title"
            type="text"
          />
        </FormControl>
        <FormControl variant="outlined">
          <InputLabel htmlFor="description">Description</InputLabel>
          <OutlinedInput
            id="description"
            value={description}
            required
            onChange={handleChange}
            name="description"
            label="Description"
            type="text"
          />
        </FormControl>
        <FormControl variant="outlined">
          <InputLabel htmlFor="posteUrl">Poster</InputLabel>
          <OutlinedInput
            type="text"
            id="posteUrl"
            value={posterUrl}
            required
            name="posterUrl"
            onChange={handleChange}
            label="Poster"
          />
        </FormControl>
        <FormControl variant="outlined">
          <InputLabel htmlFor="rating">Rating</InputLabel>
          <OutlinedInput
            id="rating"
            value={rating}
            required
            name="rating"
            type="number"
            onChange={handleChange}
            label="Rating"
          />
        </FormControl>
        <FormControl variant="outlined">
          <InputLabel htmlFor="about">About</InputLabel>
          <OutlinedInput
            type="text"
            id="about"
            value={about}
            required
            name="about"
            onChange={handleChange}
            label="About"
          />
        </FormControl>
        <Button onClick={handleSubmit} variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </Card>
  );
}

AddMovie.propTypes = {
  onAdd: PropTypes.func,
};
