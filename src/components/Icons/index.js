import React from "react";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import DescriptionIcon from "@material-ui/icons/Description";
import GitHubIcon from "@material-ui/icons/GitHub";

const style = { fontSize: 34, color: "101010" };

export default {
  email: <EmailIcon style={style} />,
  linkedin: <LinkedInIcon style={style} />,
  phone: <PhoneIcon style={style} />,
  resume: <DescriptionIcon style={style} />,
  github: <GitHubIcon style={style} />,
};
