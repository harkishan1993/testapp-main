'use client'
import Container from "@/components/Container"
import * as React from 'react'
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Tabble from "./Tabble";
import Tablegroup from "./Tablegroup";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ py: 3 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

function Description() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  return (
    <Container>
      <Box sx={{ bgcolor: 'background.paper', width: '100%' }}>
        <AppBar position="static" >
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="inherit"
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
            aria-label="scrollable force tabs example"
            className="lg:mx-auto"
          >
            <Tab label="Description" {...a11yProps(0)} />
            <Tab label="Key Features" {...a11yProps(1)} />
            <Tab label="Technical Specification" {...a11yProps(3)} />
            <Tab label="Configuration" {...a11yProps(2)} />
            <Tab label="Ordering Information" {...a11yProps(4)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <div className="w-full border text-sm bg-slate-100">
              <Tablegroup />
            </div>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <div className="w-full border p-8 text-sm">
              <ul className="list-disc flex flex-col gap-2">
                <li>Microcontroller based Design.</li>
                <li>Software linearized for better measurement accuracy</li>
                <li>Available in all standard DIN sizes.</li>
                <li>Works on universal 90-240 VAC.</li>
                <li>Universal and User selectable input from process transmitters/temperature sensors.</li>
                <li>Industrial standard Analog and Digital Interface</li>
              </ul>
            </div>
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            <div className="w-full border text-sm">
               <Tabble />
            </div>
          </TabPanel>
          <TabPanel value={value} index={3} dir={theme.direction}>
            Item Three
          </TabPanel>
          <TabPanel value={value} index={4} dir={theme.direction}>
            Item Three
          </TabPanel>
        </SwipeableViews>
      </Box>
    </Container>
  )
}

export default Description