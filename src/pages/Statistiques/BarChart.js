import * as React from 'react';
import { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import ReactApexChart from 'react-apexcharts';



const areaChartOptions = {
    chart: {
        type: 'bar',
        height: 350
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
    },
    xaxis: {
        categories: ['08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00', '00:00'],
    },
    yaxis: {
        title: {
            text: 'value'
        }
    },
    fill: {
        opacity: 1
    },
    tooltip: {
        y: {
            formatter: function (val) {
                return val + " of sensor"
            }
        }
    }
};
const BarChart = () => {

    const [options, setOptions] = useState(areaChartOptions);
    const theme = useTheme();

    const { primary, secondary } = theme.palette.text;
    const line = theme.palette.divider;


    useEffect(() => {
        setOptions((prevState) => ({
            ...prevState,
        }));
    }, [primary, secondary, line, theme]);
    const [series, setSeries] = useState([
        {
            name: 'fisrt Day',
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        },
        {
            name: 'Second Day',
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        }
    ]);


    return (
        <>
            <Box
                sx={
                    {
                        display: 'flex', justifyContent: 'center'
                    }
                }>
                <ReactApexChart options={options} series={series} type="bar" height={350} width={700} />
            </Box>
        </>
    );
}

export default BarChart;
