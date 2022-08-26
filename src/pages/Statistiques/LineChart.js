import * as React from 'react';

import { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import ReactApexChart from 'react-apexcharts';

const LineChartOptions = {
    chart: {
        type: 'area',
        height: 350
    },
    dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        type: 'datetime',
        categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        },
      }
};
const LineChart = () => {

    const [options, setOptions] = useState(LineChartOptions);
    const theme = useTheme();

    const { primary, secondary } = theme.palette.text;
    const line = theme.palette.divider;


    useEffect(() => {
        setOptions((prevState) => ({
            ...prevState,
        }));
    }, [primary, secondary, line, theme]);
    const [series, setSeries] = useState([{
        name: 'series1',
        data: [31, 40, 28, 51, 42, 109, 100]
      }, {
        name: 'series2',
        data: [11, 32, 45, 32, 34, 52, 41]
      }]);


    return (
        <>
            <Box
                sx={
                    {
                        display: 'flex', justifyContent: 'center'
                    }
                }>
                <ReactApexChart options={options} series={series} type="area" height={350} width={1300} />
            </Box>
        </>
    );
}

export default LineChart;
