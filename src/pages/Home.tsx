import React from 'react';
import {Box, makeStyles, TextField, Typography} from "@material-ui/core";
import {Autocomplete} from "@material-ui/lab";
import {useDispatch, useSelector} from "react-redux";
import {autoCompleteProduct} from "../redux/actions/productActions";
import {RootState} from "../redux/rootReducer";
import {Suggestion} from "../models/Item";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%'
  },
  wrapper: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 64
  },
  contentContainer: {
    display: 'flex',
    marginTop: theme.spacing(3),
    justifyContent: 'center',
    flex: '1 1 auto',
    overflow: 'hidden'
  },
  content: {
    flex: '1 1 auto',
    height: '100%',
    overflow: 'auto'
  },
  input: {
    width: '70%',
    padding: '10px 10px',
  }
}));

const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  { title: 'Fight Club', year: 1999 },
]

const Home = () => {
  const dispatch = useDispatch();
  const suggestions: Suggestion[] = useSelector((state: RootState) => state.ProductReducer.suggestions)
  const classes = useStyles();

  const handleAutocomplete = (event: React.ChangeEvent<{}>) => {
    // @ts-ignore
    dispatch(autoCompleteProduct(event.target.value))
  }

  return (
    <div>
      <Box mb={3} className={classes.contentContainer}>
        <Autocomplete
          onInput={(e) => handleAutocomplete(e)}
          className={classes.input}
          id="combo-box"
          options={suggestions}
          getOptionLabel={(option) => option.title}
          style={{ width: '70%' }}
          renderInput={(params) => <TextField {...params} label="Grocery Item" variant="outlined" />}
        />
      </Box>
    </div>
  );
};

export default Home;