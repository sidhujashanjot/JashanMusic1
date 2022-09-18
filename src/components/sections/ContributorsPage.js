import React from "react";
import {
  Grid,
  Container,
  Typography,
  Avatar,
  Divider,
  Link
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { pink } from "@material-ui/core/colors";

const useStyles = makeStyles({
  avatar: {
    margin: 10,
    width: 80,
    height: 80
  },
  avatatContainer: {
    width: "50%"
  },
  divider: {
    width: "100%",
    margin: 10
  },
  miniContainer: {
    margin: 10,
    "& div": {
      margin: "2px"
    },
    "& .MuiAvatar-root": {
      // width: 50,
      // height: 50,
      marginRight: 20,
      marginLeft: 10,
      background: pink[500],
      color: "#fff"
    }
  }
});

const ContributorsPage = () => {
  const classes = useStyles();

  return (
    <>
      <br />
      <Grid container justify="center">
        <Grid
          component={Link}
          href="https://www.instagram.com/sidhujashanjot/"
          target="blank"
          container
          direction="column"
          alignItems="center"
          color="inherit"
          className={classes.avatatContainer}
        >
          <Avatar
            className={classes.avatar}
            src="https://avatars.githubusercontent.com/u/69394942?v=300"
          />
          <Typography variant="h5">Jashan</Typography>
          <Typography>Creator of Jashan Music</Typography>
        </Grid>

        
        <Divider className={classes.divider} />
        <Typography variant="h5">Languages used</Typography>

        <Grid container className={classes.miniContainer}>
          <Grid container alignItems="center">
            <Avatar>N</Avatar>
            <Typography variant="h6">Nodejs</Typography>
          </Grid>
          <Grid container alignItems="center">
            <Avatar>P</Avatar>
            <Typography variant="h6">Php</Typography>
          </Grid>
          <Grid container alignItems="center">
            <Avatar>P</Avatar>
            <Typography variant="h6">Python</Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ContributorsPage;
