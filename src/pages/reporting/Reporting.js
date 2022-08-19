// material-ui
import * as React from 'react';
import { Typography, TextField, Box, Button, Stack, Grid, Divider } from '@mui/material';

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import BarChartIcon from '@mui/icons-material/BarChart';
import SsidChartIcon from '@mui/icons-material/SsidChart';
import MainCard from 'components/MainCard';
import './reporting.css'

import IncomeAreaChart from './IncomeAreaChart';
import PieChartIcon from '@mui/icons-material/PieChart';

import PiCharte from 'components/charts/pie/Piechart'

import MonthlyBarChart from 'pages/dashboard/MonthlyBarChart'

import { useEffect, useRef, useState, } from 'react'
// ==============================|| SAMPLE PAGE ||============================== //
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { DateRange } from 'react-date-range'

import format from 'date-fns/format'
import { addDays } from 'date-fns'


import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'


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

    const [range, setRange] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key: 'selection'
        }
    ])

    const [slot, setSlot] = useState('week');


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
                <Box className="date-filter">
                    <div className="calendarWrap">
                        <TextField
                            lable="date"
                            value={`${format(range[0].startDate, "MM/dd/yyyy")} to ${format(range[0].endDate, "MM/dd/yyyy")}`}
                            readOnly
                            className="inputBox"
                            onClick={() => setOpen(open => !open)}
                        />
                        <CalendarMonthIcon className="iconC" />

                        <div ref={refOne}>
                            {open &&
                                <DateRange
                                    onChange={item => setRange([item.selection])}
                                    editableDateInputs={true}
                                    moveRangeOnFirstSelection={false}
                                    ranges={range}
                                    months={1}
                                    direction="horizontal"
                                    className="calendarElement"
                                />
                            }
                        </div>
                    </div>

                </Box>

                <Divider className="divider" />
                <Grid >

                <Box sx={{ minWidth: 120 }}>
                    <FormControl 
                        sx = {{ width  : 300 }}>
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
                    <Box sx={{ width: '100%' }}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                <Tab label="Area Chart" icon={<SsidChartIcon />}  {...a11yProps(0)} />
                                <Tab label="Bar Chart" icon={<BarChartIcon />} {...a11yProps(1)} />
                                <Tab label="Pie Chart" icon={<PieChartIcon />} {...a11yProps(2)} />
                            </Tabs>
                        </Box>
                        <TabPanel value={value} index={0}>
                            <Grid container alignItems="center" justifyContent="space-between">
                                <Grid item>
                                    <Typography variant="h5">Unique Visitor</Typography>
                                </Grid>
                                <Grid item>
                                    <Stack direction="row" alignItems="center" spacing={0}>
                                        <Button
                                            size="small"
                                            onClick={() => setSlot('year')}
                                            color={slot === 'year' ? 'primary' : 'secondary'}
                                            variant={slot === 'year' ? 'outlined' : 'text'}
                                        >
                                            Year
                                        </Button>
                                        <Button
                                            size="small"
                                            onClick={() => setSlot('month')}
                                            color={slot === 'month' ? 'primary' : 'secondary'}
                                            variant={slot === 'month' ? 'outlined' : 'text'}
                                        >
                                            Month
                                        </Button>
                                        <Button
                                            size="small"
                                            onClick={() => setSlot('week')}
                                            color={slot === 'week' ? 'primary' : 'secondary'}
                                            variant={slot === 'week' ? 'outlined' : 'text'}
                                        >
                                            Week
                                        </Button>
                                        <Button
                                            size="small"
                                            onClick={() => setSlot('day')}
                                            color={slot === 'day' ? 'primary' : 'secondary'}
                                            variant={slot === 'day' ? 'outlined' : 'text'}
                                        >
                                            Day
                                        </Button>

                                    </Stack>
                                </Grid>
                            </Grid>
                            <MainCard content={false} sx={{ mt: 1.5 }}>
                                <Box sx={{ pt: 1, pr: 2 }}>
                                    <IncomeAreaChart slot={slot} />
                                </Box>
                            </MainCard>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <Grid item xs={12} md={5} lg={4}>
                                <Grid container alignItems="center" justifyContent="space-between">
                                    <Grid item>
                                        <Typography variant="h5">Income Overview</Typography>
                                    </Grid>
                                    <Grid item />
                                </Grid>
                                <MainCard sx={{ mt: 2 }} content={false}>
                                    <Box sx={{ p: 3, pb: 0 }}>
                                        <Stack spacing={2}>
                                            <Typography variant="h6" color="textSecondary">
                                                This Week Statistics
                                            </Typography>
                                            <Typography variant="h3">data</Typography>
                                        </Stack>
                                    </Box>
                                    <MonthlyBarChart />
                                </MainCard>
                            </Grid>
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            <PiCharte/>
                        </TabPanel>
                    </Box>


                </Grid>

            </MainCard>
        </div>
    )
};

export default Reporting;
