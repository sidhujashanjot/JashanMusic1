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
            src="https://avatars2.githubusercontent.com/u/23727670?s=300"
          />
          <Typography variant="h5">Shivam</Typography>
          <Typography>Creator of Ylight Music</Typography>
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
            src="https://avatars2.githubusercontent.com/u/21976188?s=300"
          />
          <Typography variant="h5">Will Adams</Typography>
          <Typography>Helped in writing code</Typography>
        </Grid>
        <Divider className={classes.divider} />
        <Typography variant="h5">Desi World Radio</Typography>
    </>
  );
};

export default DonatePage;
