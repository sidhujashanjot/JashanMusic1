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
<Typography variant="h6">Desi World Radio is one of the finest Desi Radio Station in America, its non-profit radio station only setup by desi’s for our desi community across the world.
Desi World Radio truly believe in the idea of bringing the Indian Desi community together and giving a platform for desi’s to showcase their talent and culture through Air.
Desi World Radio is a listener-supported, volunteer-powered, nonprofit radio station only dedicated to providing excellent programs to our desi community around the world.</Typography>
    </>
  );
};

export default DonatePage;
