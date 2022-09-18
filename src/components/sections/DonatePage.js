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

const DonatePage = () => {
  const classes = useStyles();

  return (
    <>
      <br />
      <Grid container justify="center">
        <Grid
          component={Link}
          href="https://github.com/shivamjoker"
          target="blank"
          container
          direction="column"
          alignItems="center"
          color="inherit"
          className={classes.avatatContainer}
        >
          <Avatar
            className={classes.avatar}
            src="https://raw.githubusercontent.com/sidhujashanjot/JashanMusic1/master/src/images/play.png"
          />
          <Typography variant="h5">Desi World Radio</Typography>
          <Typography>Download for Android</Typography>
        </Grid>

        <Grid
          container
          direction="column"
          alignItems="center"
          className={classes.avatatContainer}
          component={Link}
          href="https://github.com/bushblade"
          target="blank"
          color="inherit"
        >
          <Avatar
            className={classes.avatar}
            src="https://raw.githubusercontent.com/sidhujashanjot/JashanMusic1/master/src/images/app.png"
          />
          <Typography variant="h5">Desi World Radio</Typography>
          <Typography>Download for Apple</Typography>
        </Grid>
        <Divider className={classes.divider} />
        <Typography variant="h5">Features</Typography>

        <Grid container className={classes.miniContainer}>
          <Grid container alignItems="center">
            <Avatar>M</Avatar>
            <Typography variant="h6">24x7 Punjabi Music</Typography>
          </Grid>
          <Grid container alignItems="center">
            <Avatar>S</Avatar>
            <Typography variant="h6">High Bitrate Sound</Typography>
          </Grid>
          <Grid container alignItems="center">
            <Avatar>R</Avatar>
            <Typography variant="h6">Request Songs</Typography>
          </Grid>
          <Grid container alignItems="center">
            <Avatar>T</Avatar>
            <Typography variant="h6">Talkshows</Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default DonatePage;
