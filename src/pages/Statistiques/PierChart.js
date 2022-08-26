import * as React from 'react';

import { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import ReactApexChart from 'react-apexcharts';

const PieChartOptions = {
    chart: {
        type: 'donut',
        height: 350
    },
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 200
            },
            legend: {
                position: 'bottom'
            }
        }
    }]
};
const PierChart = () => {

    const [options, setOptions] = useState(PieChartOptions);
    const theme = useTheme();

    const { primary, secondary } = theme.palette.text;
    const line = theme.palette.divider;


    useEffect(() => {
        setOptions((prevState) => ({
            ...prevState,
        }));
    }, [primary, secondary, line, theme]);
    const [series, setSeries] = useState([44, 55, 41, 17, 15]);


    return (
        <>
            <Box
                sx={
                    {
                        display: 'flex', justifyContent: 'center'
                    }
                }>
                <ReactApexChart options={options} series={series} type="donut" height={350} width={700} />
            </Box>
        </>
    );
}

export default PierChart;
