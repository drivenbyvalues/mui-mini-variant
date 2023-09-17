import React from "react";
import {
  Grid,
  Hidden,
  List,
  ListItemText,
  ListItem,
  Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    padding: `${theme.spacing(1) / 4}px ${theme.spacing(4)}px`,
    background: theme.palette.common.white,
    position: "relative"
  }
}));

// const ListItem = styled(MuiListItem)`
//   display: inline-block;
//   width: auto;
//   padding-left: ${(props) => props.theme.spacing(2)}px;
//   padding-right: ${(props) => props.theme.spacing(2)}px;

//   &,
//   &:hover,
//   &:active {
//     color: #000;
//   }
// `;

// const Typography = styled(MuiTypography)`
//   color: ${(props) => props.theme.footer.color};
// `;

function Footer() {
  // const { t } = useTranslation();

  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Grid container spacing={0}>
        <Hidden smDown>
          <Grid container item xs={12} md={6}>
            {/* <List>
							<ListItem component="a" href="#">
								<ListItemText disableTypography primary={<Typography variant="body2">{t("translation:privacyPolicy")}</Typography>} />
							</ListItem>
						</List> */}
          </Grid>
        </Hidden>
        <Grid container item xs={12} md={6} justifyContent="flex-end">
          <List>
            <ListItem>
              <ListItemText
                disableTypography
                primary={
                  <Typography variant="body2">{`© ${new Date().getFullYear()} - Europe Tech Group`}</Typography>
                }
              />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
