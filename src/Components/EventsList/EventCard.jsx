import React from "react";
// import JssProvider from "react-jss/lib/JssProvider";
import { createGenerateClassName } from "@material-ui/core/styles";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

// import "./styles.css";

const faces = [
  "http://i.pravatar.cc/300?img=1",
  "http://i.pravatar.cc/300?img=2",
  "http://i.pravatar.cc/300?img=3",
  "http://i.pravatar.cc/300?img=4",
];

const muiBaseTheme = createMuiTheme();

const generateClassName = createGenerateClassName({
  dangerouslyUseGlobalCSS: true,
});

const theme = {
  overrides: {
    MuiCard: {
      root: {
        "&.MuiEngagementCard--01": {
          transition: "0.3s",
          maxWidth: 300,
          margin: "auto",
          boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
          "&:hover": {
            boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
          },
          "& .MuiCardMedia-root": {
            paddingTop: "56.25%",
          },
          "& .MuiCardContent-root": {
            textAlign: "left",
            padding: muiBaseTheme.spacing.unit * 3,
          },
          "& .MuiDivider-root": {
            margin: `${muiBaseTheme.spacing.unit * 3}px 0`,
          },
          "& .MuiTypography--heading": {
            fontWeight: "bold",
          },
          "& .MuiTypography--subheading": {
            lineHeight: 1.8,
          },
          "& .MuiAvatar-root": {
            display: "inline-block",
            border: "2px solid white",
            "&:not(:first-of-type)": {
              marginLeft: -muiBaseTheme.spacing.unit,
            },
          },
        },
      },
    },
  },
};

const EventCard = ({ event }) => {
  return (
    // <JssProvider generateClassName={generateClassName}>
    <MuiThemeProvider theme={createMuiTheme(theme)}>
      <div>
        <Card className={"MuiEngagementCard--01"}>
          <CardMedia image={event.cardImage} />
          <CardContent>
            <Typography
              className={"MuiTypography--heading"}
              variant={"h6"}
              gutterBottom
            >
              {event.title}
            </Typography>
            <Typography
              className={"MuiTypography--subheading"}
              variant={"caption"}
            >
              {event.shortDesc}
            </Typography>
            <Divider light />
            {event.authorsImage.map((auth) => (
              <Avatar key={auth.face} src={auth.face} />
            ))}
          </CardContent>
        </Card>
      </div>
    </MuiThemeProvider>
    // </JssProvider>
  );
};

export default EventCard;
