import * as React from 'react';
import MainCard from 'components/MainCard';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Container from 'react-bootstrap/Container';
import { useState } from 'react'
import { useTheme } from '@mui/material/styles';

import TextField from '@mui/material/TextField';
import { Box, Grid } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './statistiques.css'
import ClearIcon from '@mui/icons-material/Clear';
import PierChart from './PierChart';
import BarChart from './BarChart'

import MultiSesnor from './MultiSesnor'
import LineChart from './LineChart'
import OutlinedInput from '@mui/material/OutlinedInput';
import Chip from '@mui/material/Chip';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Stack from '@mui/material/Stack';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';
import endOfWeek from 'date-fns/endOfWeek';
import isSameDay from 'date-fns/isSameDay';
import isWithinInterval from 'date-fns/isWithinInterval';
import startOfWeek from 'date-fns/startOfWeek';
import Button from 'react-bootstrap/Button';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

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

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'noued1',
  'noued2',
  'noued3',
  'noued4'
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
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
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <CustomDay />
        </List>
      </Collapse>
    </List>
  );
}

const Statistiques = () => {


  const [periodList, setPeriodList] = useState([{ day: "" }]);

  const [weekList, seetWeekList] = useState([{ week : "" }]);
  const [monthList, setMonthList] = useState([{ month: "" }]);
  const [yearList, setYearList] = useState([{ year: "" }]);


  const handlesPeriodeAdd = () => {
    setPeriodList([...periodList, { day: "" }])
  }
  const handlesPeriodeRmv = (index) => {
    const list = [...periodList]
    list.splice(index, 1);
    setPeriodList(list)
  }


  const handlesWeekeAdd = () => {
    seetWeekList([...weekList, { week: "" }])
  }
  const handlesWeekRmv = (index) => {
    const list = [...weekList]
    list.splice(index, 1);
    seetWeekList(list)
  }



  const handlesMontheAdd = () => {
    setMonthList([...monthList, { month: "" }])
  }
  const handlesMonthRmv = (index) => {
    const list = [...monthList]
    list.splice(index, 1);
    setMonthList(list)
  }

  const handlesYearheAdd = () => {
    setYearList([...yearList, { year: "" }])
  }
  const handlesYearRmv = (index) => {
    const list = [...yearList]
    list.splice(index, 1);
    setYearList(list)
  }










  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChangeP = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  const [value, setValue] = useState(new Date('2014-08-18T21:11:54'));

  const [sensor, setSensor] = React.useState('');

  const handleChangeS = (event) => {
    setSensor(event.target.value);
  };

  const handleChange = (newValue) => {
    setValue(newValue);
  }
  return (
    <>
      <MainCard>
        <Tabs
          defaultActiveKey="ComparaisonParPeriode"
          id="uncontrolled-tab-example"
          className="mb-3">
          <Tab eventKey="ComparaisonParPeriode" title="Comparaison par Période">
            <Container>
              <FormControl sx={{ m: 1, minWidth: 300, display: 'flex', justifyContent: 'center', }}>
                <InputLabel id="demo-simple-select-autowidth-label">Capteur</InputLabel>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  value={sensor}
                  onChange={handleChangeS}
                  autoWidth
                  label="Sensor"
                >
                  <MenuItem value={10}>noeud 1</MenuItem>
                  <MenuItem value={21}>noeud 2</MenuItem>
                  <MenuItem value={22}>noeud 3</MenuItem>
                </Select>
              </FormControl>
              <Tabs
                defaultActiveKey="day"
                id="fill-tab-example"
                className="mb-3"
                fill
              >


                <Tab eventKey="day" title="Day">




                  {
                    periodList.map((singlePeriode, index) => (
                      <>

                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            p: 1,
                            m: 1,
                            bgcolor: 'background.paper',
                            borderRadius: 1,
                          }}

                          key={index} className="days"

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
                          {periodList.length > 1 && (
                            <Button variant="danger"
                              onClick={() => handlesPeriodeRmv(index)}
                              style={{ marginRight: 10 }}
                            ><ClearIcon /></Button>

                          )
                          }
                          {periodList.length - 1 == index && periodList.length < 4 && (

                            <Button onClick={handlesPeriodeAdd}><AddIcon /></Button>



                          )
                          }

                        </Box>

                      </>

                    ))

                  }


                  <div className="d-grid gap-2">
                    <Button variant="primary" size="lg">
                      Comparer      </Button>

                  </div>


                  <LineChart />
                  <Box
                    sx={
                      {
                        display: 'flex', justifyContent: 'center'
                      }
                    }>
                    <BarChart />
                    <PierChart />


                  </Box>

                </Tab>

                <Tab eventKey="week" title="Week">


                {
                    weekList.map((oneYear, index) => (
                      <>

                      <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            p: 1,
                            m: 1,
                            bgcolor: 'background.paper',
                            borderRadius: 1,
                          }}

                          key={index} className="days"

                        >

                        <div id = "week">

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

                    {/*   <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center'
                    }}
                  >
                    <NestedList />


                  </Box> */}


                        </div>


{weekList.length > 1 && (
                            <Button variant="danger"
                              onClick={() => handlesWeekRmv(index)}
                              style={{ marginRight: 10 }}
                            ><ClearIcon /></Button>

                          )
                          }
                          {monthList.length - 1 == index && monthList.length < 4 && (

                            <Button onClick={handlesWeekeAdd}><AddIcon /></Button>



                          )
                          }

                      </Box>
                      </>
                    ))
                }
                <div className="d-grid gap-2">
                    <Button variant="primary" size="lg">
                      Comparer      </Button>

                  </div>

                  <LineChart />

                  <Box
                    sx={
                      {
                        display: 'flex', justifyContent: 'center'
                      }
                    }>
                    <BarChart />
                    <PierChart />


                  </Box>

                </Tab>


                <Tab eventKey="month" title="Month">

                {
                    monthList.map((oneYear, index) => (
                      <>

                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      p: 1,
                      m: 1,
                      bgcolor: 'background.paper',
                      borderRadius: 1,
                    }}
                    key={index}
                  >   <LocalizationProvider dateAdapter={AdapterDateFns}       id="month"                  >
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
                   { monthList.length > 1 && (
                            <Button variant="danger"
                              onClick={() => handlesMonthRmv(index)}
                              style={{ marginRight: 10 }}
                            ><ClearIcon /></Button>

                          )
                          }
                          {monthList.length - 1 == index && monthList.length < 4 && (

                            <Button onClick={handlesMontheAdd}><AddIcon /></Button>



                          )
                          }

                        </Box>

                      </>

                    ))

                  }
                  <div className="d-grid gap-2">
                    <Button variant="primary" size="lg">
                      Comparer      </Button>

                  </div>

                  <LineChart />

                  <Box
                    sx={
                      {
                        display: 'flex', justifyContent: 'center'
                      }
                    }>
                    <BarChart />
                    <PierChart />


                  </Box>
                </Tab>
                <Tab eventKey="year" title="Year">

                {
                    yearList.map((oneYear, index) => (
                      <>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      p: 1,
                      m: 1,
                      bgcolor: 'background.paper',
                      borderRadius: 1,
                    }}
                    key={index} 
                  >  
                    <LocalizationProvider dateAdapter={AdapterDateFns} id = "year">
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
                    {yearList.length > 1 && (
                            <Button variant="danger"
                              onClick={() => handlesYearRmv(index)}
                              style={{ marginRight: 10 }}
                            ><ClearIcon /></Button>

                          )
                          }
                          {yearList.length - 1 == index && yearList.length < 4 && (

                            <Button onClick={handlesYearheAdd}><AddIcon /></Button>


                            )
                          }

                        </Box>

                      </>

                    ))

                  }
<div className="d-grid gap-2">
                    <Button variant="primary" size="lg">
                      Comparer      </Button>

                  </div>

                 
                  <LineChart />

                  <Box
                    sx={
                      {
                        display: 'flex', justifyContent: 'center'
                      }
                    }>
                    <BarChart />
                    <PierChart />


                  </Box>

                </Tab>
              </Tabs>

            </Container>
          </Tab>

          <Tab eventKey="ComparaisonParCapteurs" title="Comparaison par capteurs">
            <MultiSesnor />


            <Tabs
              defaultActiveKey="day"
              id="fill-tab-example"
              className="mb-3"
              fill
            >


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



                <div className="d-grid gap-2">
                  <Button variant="primary" size="lg">
                    Comparer      </Button>

                </div>


                <LineChart />
                <Box
                  sx={
                    {
                      display: 'flex', justifyContent: 'center'
                    }
                  }>
                  <BarChart />
                  <PierChart />


                </Box>

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

                <LineChart />

                <Box
                  sx={
                    {
                      display: 'flex', justifyContent: 'center'
                    }
                  }>
                  <BarChart />
                  <PierChart />


                </Box>

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
                <LineChart />

                <Box
                  sx={
                    {
                      display: 'flex', justifyContent: 'center'
                    }
                  }>
                  <BarChart />
                  <PierChart />


                </Box>
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
                <LineChart />

                <Box
                  sx={
                    {
                      display: 'flex', justifyContent: 'center'
                    }
                  }>
                  <BarChart />
                  <PierChart />


                </Box>

              </Tab>

            </Tabs>

          </Tab>
        </Tabs>

      </MainCard>
    </>
  );
}


export default Statistiques;
