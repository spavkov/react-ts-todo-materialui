import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TabPanel from "../components/MaterialUi/TabPanel";
import TodosPage from "./TodosPage";
import AboutPage from "./AboutPage";

function a11yProps(index: any) {
    return {
      "id": `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

const useStyles = makeStyles((theme: Theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
  }));

export default function HomePage() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    function handleChange(event: React.ChangeEvent<{}>, newValue: number) {
        setValue(newValue);
      }

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
            <Tab label="Todo's" {...a11yProps(0)} />
            <Tab label="About" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <TodosPage />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <AboutPage />
        </TabPanel>
      </div>
    );
  }