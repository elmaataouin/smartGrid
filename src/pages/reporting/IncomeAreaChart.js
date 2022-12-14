import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';

// third-party
import ReactApexChart from 'react-apexcharts';

// chart options
const areaChartOptions = {
    chart: {
        height: 600,
        type: 'area',
        toolbar: {
            show: true
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth',
        width: 2
    },
    grid: {
        strokeDashArray: 0
    }
};

// ==============================|| INCOME AREA CHART ||============================== //

const IncomeAreaChart = ({  }) => {
    const theme = useTheme();

    const { primary, secondary } = theme.palette.text;
    const line = theme.palette.divider;

    const [options, setOptions] = useState(areaChartOptions);

    useEffect(() => {
        setOptions((prevState) => ({
            ...prevState,
            colors:['#00e676','#ff7043','#42a5f5','#ffee58' , '#7e57c2'],
            xaxis: {
                labels: {
                    style: {
                        colors: [
                            secondary,
                            secondary,
                            secondary,
                            secondary,
                            secondary,
                            secondary,
                            secondary,
                            secondary,
                            secondary,
                            secondary,
                            secondary,
                            secondary
                        ]
                    }
                },
                axisBorder: {
                    show: true,
                    color: line
                },
                
            },
            yaxis: {
                labels: {
                    style: {
                        colors: [secondary]
                    }
                }
            },
            grid: {
                borderColor: line
            },
            tooltip: {
                theme: 'light'
            }
        }));
    }, [primary, secondary, line, theme]);

    const [series, setSeries] = useState([
        {
            name: 'phase1',
            data: [0, 10, 20, 30, 40, 50, 60]
        },
        {
            name: 'phase2',
            data: [5, 15, 25, 35, 45, 55, 65]
        },
        {
            name: 'pase3',
            data: [70, 60, 50, 40, 30, 20, 10]
        },
        {
            name: "T??mperature",
            data: [35, 41, 62, 42, 13, 18, 29]
        },
        {
            name: 'Humidit??',
            data: [87, 57, 74, 99, 75, 38, 62]
          }
    ]);


    return <ReactApexChart options={options} series={series} type="line" height={700}  />;
};


export default IncomeAreaChart;
