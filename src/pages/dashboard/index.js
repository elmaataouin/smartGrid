import { useState } from 'react';
import * as React from 'react';

import Vtabs from 'components/Vtabs/Vtabs';

import CapteursTable from './CapteursTable';


/* 
import UsersTable from './UsersTable';

import IncomeAreaChart from './IncomeAreaChart';
import MonthlyBarChart from './MonthlyBarChart';
import ReportAreaChart from './ReportAreaChart';
import SalesColumnChart from './SalesColumnChart';

// assets
import { GiftOutlined, MessageOutlined, SettingOutlined } from '@ant-design/icons';
import avatar1 from 'assets/images/users/avatar-1.png';
import avatar2 from 'assets/images/users/avatar-2.png';
import avatar3 from 'assets/images/users/avatar-3.png';
import avatar4 from 'assets/images/users/avatar-4.png';

// material-ui
import {
    Avatar,
    AvatarGroup,
    Button,
    List,
    ListItemAvatar,
    ListItemButton,
    ListItemSecondaryAction,
    ListItemText,
    MenuItem,
    Stack,
    TextField,
} from '@mui/material'; */

import MainCard from 'components/MainCard';
import AnalyticEcommerce from 'components/cards/statistics/AnalyticEcommerce';

// icons material-ui



import BoltIcon from '@mui/icons-material/Bolt';
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';
import WavesIcon from '@mui/icons-material/Waves';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';


import { Box, Grid, Typography } from '@mui/material';



import {
    Link
} from "react-router-dom";

import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Bolt } from '../../../node_modules/@mui/icons-material/index';



const dates = ["04-2021", "05-2021", "06-2021", "07-2021", "08-2021", "09-2021", "10-2021", "11-2021", "12-2021"];

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
// avatar style
const avatarSX = {
    width: 36,
    height: 36,
    fontSize: '1rem'
};

// action style
const actionSX = {
    mt: 0.75,
    ml: 1,
    top: 'auto',
    right: 'auto',
    alignSelf: 'flex-start',
    transform: 'none'
};

// sales report status
const status = [
    {
        value: 'today',
        label: 'Today'
    },
    {
        value: 'month',
        label: 'This Month'
    },
    {
        value: 'year',
        label: 'This Year'
    }
];




// ==============================|| DASHBOARD - DEFAULT ||============================== //

const DashboardDefault = () => {
    const [value, setValue] = useState('today');
    const [slot, setSlot] = useState('week');

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Grid container rowSpacing={1.5} columnSpacing={2}>

            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box sx={style} >
                    {open ? ( <IconButton aria-label="close" onClick={handleClose} sx={{
                                position: 'absolute',
                                right: 8,
                                top: 8,
                                color: (theme) => theme.palette.grey[500], }}>
                            <CloseIcon />
                        </IconButton>
                    ) : null}
                    <Vtabs dates={dates} />
                </Box>
            </Modal>


            <Grid item xs={12} sx={{
                mb: -1.25,
                p: 2
            }}>
                <Typography variant="h6">00-oksa-armoire / user-1 </Typography>
            </Grid>


            <Grid item xs={8} sm={6} md={4} lg={2}>
                <Link onClick={handleOpen} to="" className='lien' style={{ textDecoration: 'none' }} >
                    <AnalyticEcommerce
                        title="phase 1"
                        count="27.8"
                        extra="il y a 15 min"
                        icon={<BoltIcon />}
                        ac="phase" />
                </Link>
            </Grid>

            <Grid item xs={8} sm={6} md={4} lg={2}>
                <Link onClick={handleOpen} to="" className='lien' style={{ textDecoration: 'none' }} >
                    <AnalyticEcommerce
                        title="phase 2"
                        count="27.8"
                        extra="il y a 15 min"
                        icon={<BoltIcon />}
                        ac="phase" />
                </Link>
            </Grid>

            <Grid item xs={8} sm={6} md={4} lg={2}>
                <Link onClick={handleOpen} to="" className='lien' style={{ textDecoration: 'none' }} >
                    <AnalyticEcommerce
                        title="phase 3"
                        count="27.8"
                        extra="il y a 15 min"
                        icon={<BoltIcon />}
                        ac="phase" />
                </Link>
            </Grid>

            <Grid item xs={8} sm={6} md={4} lg={2}>
                <Link onClick={handleOpen} to="" className='lien' style={{ textDecoration: 'none' }} >
                    <AnalyticEcommerce
                        ac="courant"
                        title="Courant 1" count="2.31" extra="il y a 15 min"
                        icon={<ElectricalServicesIcon />}
                    />
                </Link>
            </Grid>

            <Grid item xs={8} sm={6} md={4} lg={2}>
                <Link onClick={handleOpen} to="" className='lien' style={{ textDecoration: 'none' }} >
                    <AnalyticEcommerce icon={<ElectricalServicesIcon />} title="Courant 2" ac="courant" count="27.8" extra="il y a 15 min" />
                </Link>
            </Grid>

            <Grid item xs={8} sm={6} md={4} lg={2}>
                <Link onClick={handleOpen} to="" className='lien' style={{ textDecoration: 'none' }} >
                    <AnalyticEcommerce icon={<ElectricalServicesIcon />} title="Courant 3" ac="courant" count="27.8" extra="il y a 15 min" />
                </Link>
            </Grid>

            <Grid item xs={8} sm={6} md={4} lg={3}>
                <Link onClick={handleOpen} to="" className='lien' style={{ textDecoration: 'none' }} >

                    <AnalyticEcommerce
                        title="Témperature"
                        count="28.7"
                        extra="il y a 15 min"
                        icon={<DeviceThermostatIcon />}
                        ac="temperature"
                    />
                </Link>
            </Grid>

            <Grid item xs={8} sm={6} md={4} lg={3}>
                <Link onClick={handleOpen} to="" className='lien' style={{ textDecoration: 'none' }} >
                    <AnalyticEcommerce
                        title="Humidité"
                        count="78"
                        extra="il y a 15 min"
                        icon={<AcUnitIcon />}
                        ac="humidite"
                    />
                </Link>
            </Grid>

            <Grid item xs={8} sm={6} md={4} lg={3}>
                <Link onClick={handleOpen} to="" className='lien' style={{ textDecoration: 'none' }} >
                    <AnalyticEcommerce
                        title="Volume"
                        count="78"
                        extra="il y a 15 min"
                        icon={<LocalDrinkIcon />}
                        ac="volume"
                    />
                </Link>
            </Grid>

            <Grid item xs={8} sm={6} md={4} lg={3}>
                <Link onClick={handleOpen} to="" className='lien' style={{ textDecoration: 'none' }} >
                    <AnalyticEcommerce
                        title="Débit"
                        count="78"
                        extra="il y a 15 min"
                        icon={<WavesIcon />}
                        ac="debit"
                    />
                </Link>
            </Grid>

            <Grid item xs={8} sm={6} md={4} lg={3}>
                <Link onClick={handleOpen} to="" className='lien' style={{ textDecoration: 'none' }} >
                    <AnalyticEcommerce
                        title="Tension"
                        count="78"
                        extra="il y a 15 min"
                        icon={<Bolt />}
                        ac="tension"
                    />
                </Link>
            </Grid>

            <Grid item xs={8} sm={6} md={4} lg={3}>
                <Link onClick={handleOpen} to="" className='lien' style={{ textDecoration: 'none' }} >

                    <AnalyticEcommerce
                        title="Courant"
                        count="78"
                        extra="il y a 15 min"
                        icon={<ElectricalServicesIcon />}
                        ac="courantem"
                    />
                </Link>
            </Grid>

            <Grid item xs={8} sm={6} md={4} lg={3}>
                <Link onClick={handleOpen} to="" className='lien' style={{ textDecoration: 'none' }} >
                    <AnalyticEcommerce
                        title="Energie"
                        count="78"
                        extra="il y a 15 min"
                        icon={<BatteryChargingFullIcon />}
                        ac="energie"
                    />
                </Link>
            </Grid>

            <Grid item xs={8} sm={6} md={4} lg={3}>
                <Link onClick={handleOpen} to="" className='lien' style={{ textDecoration: 'none' }} >

                    <AnalyticEcommerce
                        title="Puissance Moyenne"
                        count="78"
                        extra="il y a 15 min"
                        icon={<Bolt />}
                        ac="puissancem"
                    />
                </Link>
            </Grid>

            <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />

            <Grid item xs={12} md={5} lg={12}>
                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item>
                        <Typography variant="h5">Table des capteurs</Typography>
                    </Grid>
                    <Grid item />
                </Grid>
                <MainCard sx={{ mt: 2 }} content={false}>

                    <CapteursTable />
                </MainCard>
            </Grid>


        </Grid>

    );
};

export default DashboardDefault;
