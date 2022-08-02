import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


import Linechart from '../charts/Line/Lienchart'
import Barchart from '../charts/Bar/Barchart';
import Piechart from '../charts/pie/Piechart';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
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
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function Vtabs(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 'auto', length : 'auto' }}
    >


      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{  height: 'auto', length : 'auto' }}
      >
        <Tab label="Line chart" {...a11yProps(0)} />
        <Tab label="Bar chart" {...a11yProps(1)} />
        <Tab label="Pie chart" {...a11yProps(2)} />

       
      </Tabs>
      
      <TabPanel value={value} index={0}>
      <Linechart val = {props.date} />
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Barchart/>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Piechart />
      </TabPanel>
      
    </Box>
  );
}
