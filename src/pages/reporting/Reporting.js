// material-ui
import * as React from 'react';
import { Typography, TextField, Box, Button, Stack, Grid, Divider } from '@mui/material';

import PropTypes from 'prop-types';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore'
import MainCard from 'components/MainCard';
import './reporting.css'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Collapse from '@mui/material/Collapse';
import { styled } from '@mui/material/styles';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';
import IncomeAreaChart from './IncomeAreaChart';
import isSameDay from 'date-fns/isSameDay';
import isWithinInterval from 'date-fns/isWithinInterval';
import endOfWeek from 'date-fns/endOfWeek';
import startOfWeek from 'date-fns/startOfWeek';

import ShowChartIcon from '@mui/icons-material/ShowChart';
import MonthlyBarChart from 'pages/dashboard/MonthlyBarChart'

import { useEffect, useRef, useState, } from 'react'
// ==============================|| SAMPLE PAGE ||============================== //



import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
const CustomPickersDay = styled(PickersDay, {
  shouldForwardProp: (prop) =>
    prop !== 'dayIsBetween' && prop !== 'isFirstDay' && prop !== 'isLastDay',
})(({ theme, dayIsBetween, isFirstDay, isLastDay }) => ({
  ...(dayIsBetween && {
    borderRadius: 0,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    '&:hover, &:focus': {
      backgroundColor: theme.palette.primary.dark,
    },
  }),
  ...(isFirstDay && {
    borderTopLeftRadius: '50%',
    borderBottomLeftRadius: '50%',
  }),
  ...(isLastDay && {
    borderTopRightRadius: '50%',
    borderBottomRightRadius: '50%',
  }),
}));
function CustomDay() {
  const [value, setValue] = React.useState(new Date());

  const renderWeekPickerDay = (date, selectedDates, pickersDayProps) => {
    if (!value) {
      return <PickersDay {...pickersDayProps} />;
    }

    const start = startOfWeek(value);
    const end = endOfWeek(value);

    const dayIsBetween = isWithinInterval(date, { start, end });
    const isFirstDay = isSameDay(date, start);
    const isLastDay = isSameDay(date, end);

    return (
      <CustomPickersDay
        {...pickersDayProps}
        disableMargin
        dayIsBetween={dayIsBetween}
        isFirstDay={isFirstDay}
        isLastDay={isLastDay}
      />
    );
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StaticDatePicker
        displayStaticWrapperAs="desktop"
        label="Week picker"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderDay={renderWeekPickerDay}
        renderInput={(params) => <TextField {...params} />}
        inputFormat="'Week of' MMM d"
      />
    </LocalizationProvider>
  );
}
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}





const Reporting = () => {


  const [slot, setSlot] = useState('week');

  function Charts() {

    return (
      <Box sx={{ width: '100%' }}>
        <MainCard content={false} sx={{ mt: 1.5 }}>
          <Box sx={{ pt: 1, pr: 2 }}>
            <Tabs defaultActiveKey="line" id="fill-tab-example" className="mb-3">
              <Tab eventKey="line" title="LineChart" icon={<ShowChartIcon />} >
                <IncomeAreaChart slot={slot} />
              </Tab>

              <Tab eventKey="bar" title="BarChart">
                <MonthlyBarChart />

              </Tab>
            </Tabs>

          </Box>
        </MainCard>
      </Box>
    )
  }
  // open close
  const [open, setOpen] = useState(false)

  // get the target element to toggle 
  const refOne = useRef(null)

  useEffect(() => {
    // event listeners
    document.addEventListener("keydown", hideOnEscape, true)
    document.addEventListener("click", hideOnClickOutside, true)
  }, [])

  // hide dropdown on ESC press
  const hideOnEscape = (e) => {
    // console.log(e.key)
    if (e.key === "Escape") {
      setOpen(false)
    }
  }

  // Hide on outside click
  const hideOnClickOutside = (e) => {
    // console.log(refOne.current)
    // console.log(e.target)
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false)
    }
  }

  function NestedList() {
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
      setOpen(!open);
    };

    return (
      <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton onClick={handleClick}>

          <ListItemText primary="week" />
          {!open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={!open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <CustomDay />
          </List>
        </Collapse>
      </List>
    );
  }


  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [sensor, setSensor] = React.useState('');

  const handleChangee = (event) => {
    setSensor(event.target.value);
  };


  return (
    <div>
      <MainCard className="container">
        <Divider className="divider" />
        <Grid sx={
          {
            mb: 2
          }
        }>
          <Box sx={{ minWidth: 120 }}>
            <FormControl
              sx={{ width: 300 }}>
              <InputLabel id="demo-simple-select-label">Sensors</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={sensor}
                label="sensors"
                onChange={handleChangee}
              >
                <MenuItem value={10}>01-oksa-armoire</MenuItem>
                <MenuItem value={20}>02-oksa-armoire</MenuItem>
                <MenuItem value={30}>03-oksa-armoire</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid>

        <Tabs defaultActiveKey="day" id="fill-tab-example" className="mb-3">

          <Tab eventKey="day" title="Day">
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                p: 1,
                m: 1,
                bgcolor: 'background.paper',
                borderRadius: 1,
              }}

            >
              <TextField
                id="day"
                label="Day"
                type="date"
                name="day"
                defaultValue="2022-08-22"
                sx={{ width: 220, mr: 4 }}
                InputLabelProps={{
                  shrink: true,
                }}
              />


            </Box>
            <Charts />
          </Tab>

          <Tab eventKey="week" title="Week">
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                p: 1,
                m: 1,
                bgcolor: 'background.paper',
                borderRadius: 1,
              }}
            >
              <Button
                sx={
                  {
                    mr: 1
                  }
                }><ArrowLeftIcon /></Button>
              <TextField
                id="date"
                label="From"
                type="date"
                defaultValue="2022-08-22"
                sx={{ width: 220, mr: 4 }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                id="date"
                label="to"
                type="date"
                defaultValue="2022-08-22"
                sx={{ width: 220 }}
                InputLabelProps={{
                  shrink: true,
                }}

              />
              <Button sx={
                {
                  ml: 1
                }
              }><ArrowRightIcon /></Button>

            </Box>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <NestedList />


            </Box>
            <Charts />


          </Tab>

          <Tab eventKey="month" title="Month">


            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                p: 1,
                m: 1,
                bgcolor: 'background.paper',
                borderRadius: 1,
              }}
            >   <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Stack spacing={1}>
                  <DatePicker
                    views={['year', 'month']}
                    label="Year only"
                    value={value}
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} helperText={null} />}
                  />
                </Stack>
              </LocalizationProvider>
            </Box>
            <Charts />

          </Tab>

          <Tab eventKey="year" title="Year">

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                p: 1,
                m: 1,
                bgcolor: 'background.paper',
                borderRadius: 1,
              }}
            >    <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Stack spacing={3}>
                  <DatePicker
                    views={['year']}
                    label="Year only"
                    value={value}
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} helperText={null} />}
                  />
                </Stack>
              </LocalizationProvider>
            </Box>
            <Charts />

          </Tab>
        </Tabs>



      </MainCard>
    </div>
  )
};

export default Reporting;
