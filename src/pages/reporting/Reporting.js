// material-ui
import * as React from 'react';
import { Typography, TextField, Box, Button, Card, CardHeader, CardContent, Divider } from '@mui/material';

import MainCard from 'components/MainCard';
import './reporting.css'
import { useEffect, useRef, useState } from 'react'
// ==============================|| SAMPLE PAGE ||============================== //

import { DateRange } from 'react-date-range'

import format from 'date-fns/format'
import { addDays } from 'date-fns'


import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

const Reporting = () => {

    const [range, setRange] = useState([
        {
          startDate: new Date(),
          endDate: addDays(new Date(), 7),
          key: 'selection'
        }
      ])
    
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
        if( e.key === "Escape" ) {
          setOpen(false)
        }
      }
    
      // Hide on outside click
      const hideOnClickOutside = (e) => {
        // console.log(refOne.current)
        // console.log(e.target)
        if( refOne.current && !refOne.current.contains(e.target) ) {
          setOpen(false)
        }
      }

    return (
        <div>
            <Typography variant="h4" sx={{ m: 1 }}>Reporting</Typography>
            <MainCard className="container">

                <Box className="date-filter">

                <div className="calendarWrap">

<TextField 
  lable = "date"
  value={`${format(range[0].startDate, "MM/dd/yyyy")} to ${format(range[0].endDate, "MM/dd/yyyy")}`}
  readOnly
  className="inputBox"
  onClick={ () => setOpen(open => !open) }
/>

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
            </MainCard>
        </div>
) };

                export default Reporting;
