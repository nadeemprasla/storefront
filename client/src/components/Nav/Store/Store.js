import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse
} from "@material-ui/core";
import {
  ExpandLess,
  ExpandMore,
  Description,
  Store,
  Create
} from "@material-ui/icons";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  nested: {
    paddingLeft: theme.spacing(4)
  }
}));

export default function StoreComp(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const {updateSelected, selected} = props

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <Store />
        </ListItemIcon>
        <ListItemText primary={"Store"} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <Link to="/daily" style={{ textDecoration: "none", color:"black" }}>
            <ListItem button className={classes.nested} onClick={()=>{updateSelected(1)}} selected={selected === 1}>
              <ListItemIcon>
                <Create />
              </ListItemIcon>
              <ListItemText primary="Daily" />
            </ListItem>
          </Link>
          <Link to="/report" style={{ textDecoration: "none", color:"black" }}>
            <ListItem button className={classes.nested} onClick={()=>{updateSelected(2)}} selected={selected === 2}>
              <ListItemIcon>
                <Description />
              </ListItemIcon>
              <ListItemText primary="Report" />
            </ListItem>
          </Link>
        </List>
      </Collapse>
    </List>
  );
}
