import { useState } from 'react';
import * as React from 'react';

import Vtabs from 'components/Vtabs/Vtabs';

// project import
import CapteursTable from './CapteursTable';
import UsersTable from './UsersTable';

import IncomeAreaChart from './IncomeAreaChart';
import MonthlyBarChart from './MonthlyBarChart';
import ReportAreaChart from './ReportAreaChart';
import SalesColumnChart from './SalesColumnChart';
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
    Box,
    Button,
    Grid,
    List,
    ListItemAvatar,
    ListItemButton,
    ListItemSecondaryAction,
    ListItemText,
    MenuItem,
    Stack,
    TextField,
    Typography
} from '@mui/material';

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
    width: 1200,
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
            {/* row 1 */}

            <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>

        {open ? (
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}

            

            
          <Box
        sx={{
          display: 'inline',
          flexDirection: 'row-reverse',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
          borderRadius: 1,
          margin : '30%'
        }}
      >
              <span>
            From :
            <input  type="date" id="startdate" value="2021-04-01"/>
              </span>
              <span>
            To : 
            <input  type="date" id="enddate" value="2021-11-01"/>
              </span>
            </Box> 

            <Vtabs dates={dates} />




          {/* <Box
        sx={{
          display: 'flex',
          flexDirection: 'row-reverse',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
          borderRadius: 1,
        }}
      >
            <Button onClick={handleClose} variant="outlined" color="error">Close modal</Button>
                </Box> */}
        </Box>
      </Modal>

            <Grid item xs={12} sx={{ mb: -2.25,
                                     p : 2 }}>
                <Typography variant="h5">Dashboard</Typography>
            </Grid>

            <Grid item xs={12} sx={{ mb: -1.25,
                                     p : 2 }}>
                <Typography variant="h6">00-oksa-armoire / user-1 </Typography>
            </Grid>
{/* 

            <Grid item xs={8} sm={6} md={4} lg={2}>
            <Link  onClick={handleOpen} to="" className='lien'
            
            style={
                {

                    textDecoration : 'none'                     
                }
            }

            >
                <AnalyticEcommerce 
                        title="Humidité"
                        count="27.8"
                        extra="il y a 15 min"
                        icon={<DeviceThermostatIcon/>}
                        ac = "card1"/>
            </Link>
            </Grid> */}

            <Grid item xs={8} sm={6} md={4} lg={2}>
                <Link  onClick={handleOpen} to="" className='lien' style={{ textDecoration : 'none'}} >
                    <AnalyticEcommerce 
                            title="phase 1"
                            count="27.8"
                            extra="il y a 15 min"
                            icon={<BoltIcon/>}
                            ac = "phase"/>
                </Link>
            </Grid>

            <Grid item xs={8} sm={6} md={4} lg={2}>
                <Link  onClick={handleOpen} to="" className='lien' style={{ textDecoration : 'none'}} >
                    <AnalyticEcommerce 
                            title="phase 2"
                            count="27.8"
                            extra="il y a 15 min"
                            icon={<BoltIcon/>}
                            ac = "phase"/>
                </Link>
            </Grid>

            <Grid item xs={8} sm={6} md={4} lg={2}>
                <Link  onClick={handleOpen} to="" className='lien' style={{ textDecoration : 'none'}} >
                    <AnalyticEcommerce 
                            title="phase 3"
                            count="27.8"
                            extra="il y a 15 min"
                            icon={<BoltIcon/>}
                            ac = "phase"/>
                </Link>
            </Grid>

            <Grid item xs={8} sm={6} md={4} lg={2}>
            <Link  onClick={handleOpen} to="" className='lien' style={{ textDecoration : 'none'}} >
                <AnalyticEcommerce   
                 ac = "courant" 
                title="Courant 1" count="2.31"  extra="il y a 15 min"
                icon={<ElectricalServicesIcon/>}
                 />
            </Link>
            </Grid>

            <Grid item xs={8} sm={6} md={4} lg={2}>
            <Link  onClick={handleOpen} to="" className='lien' style={{ textDecoration : 'none'}} >
                <AnalyticEcommerce icon = {<ElectricalServicesIcon/>} title="Courant 2" ac = "courant"  count="27.8"  extra="il y a 15 min" />
            </Link>
            </Grid>

            <Grid item xs={8} sm={6} md={4} lg={2}>
            <Link  onClick={handleOpen} to="" className='lien' style={{ textDecoration : 'none'}} >
                <AnalyticEcommerce icon = {<ElectricalServicesIcon/>}  title="Courant 3"  ac = "courant" count="27.8"  extra="il y a 15 min" />
            </Link>
            </Grid>
 
           <Grid item xs={8} sm={6} md={4} lg={3}>
           <Link  onClick={handleOpen} to="" className='lien' style={{ textDecoration : 'none'}} >

                <AnalyticEcommerce 
                        title="Témperature" 
                        count="28.7" 
                        extra="il y a 15 min"
                        icon={<DeviceThermostatIcon/>}
                        ac = "temperature"
                         />
            </Link>
            </Grid>

            <Grid item xs={8} sm={6} md={4} lg={3}>
            <Link  onClick={handleOpen} to="" className='lien' style={{ textDecoration : 'none'}} >
                <AnalyticEcommerce
                     title="Humidité"
                     count="78"
                     extra="il y a 15 min"
                     icon={<AcUnitIcon/>}
                     ac = "humidite"
                       />
            </Link>
            </Grid>

            <Grid item xs={8} sm={6} md={4} lg={3}>
            <Link  onClick={handleOpen} to="" className='lien' style={{ textDecoration : 'none'}} >
                <AnalyticEcommerce
                     title="Volume"
                     count="78"
                     extra="il y a 15 min"
                     icon={<LocalDrinkIcon/>}
                     ac = "volume"
                       />
            </Link>
            </Grid> 
            
            <Grid item xs={8} sm={6} md={4} lg={3}>
            <Link  onClick={handleOpen} to="" className='lien' style={{ textDecoration : 'none'}} >
                <AnalyticEcommerce
                     title="Débit"
                     count="78"
                     extra="il y a 15 min"
                     icon={<WavesIcon/>}
                     ac = "debit"
                       />
            </Link>
            </Grid>

            <Grid item xs={8} sm={6} md={4} lg={3}>
            <Link  onClick={handleOpen} to="" className='lien' style={{ textDecoration : 'none'}} >
                <AnalyticEcommerce
                     title="Tension"
                     count="78"
                     extra="il y a 15 min"
                     icon={<Bolt/>}
                     ac = "tension"
                       />
            </Link>
            </Grid>

            <Grid item xs={8} sm={6} md={4} lg={3}>
            <Link  onClick={handleOpen} to="" className='lien' style={{ textDecoration : 'none'}} >

                <AnalyticEcommerce
                     title="Courant"
                     count="78"
                     extra="il y a 15 min"
                     icon={<ElectricalServicesIcon/>}
                     ac = "courantem"
                       />
            </Link>
            </Grid>

            <Grid item xs={8} sm={6} md={4} lg={3}>
            <Link  onClick={handleOpen} to="" className='lien' style={{ textDecoration : 'none'}} >
                <AnalyticEcommerce
                     title="Energie"
                     count="78"
                     extra="il y a 15 min"
                     icon={<BatteryChargingFullIcon/>}
                     ac = "energie"
                       />
            </Link>
            </Grid>

            <Grid item xs={8} sm={6} md={4} lg={3}>
            <Link  onClick={handleOpen} to="" className='lien' style={{ textDecoration : 'none'}} >

                <AnalyticEcommerce
                     title="Puissance Moyenne"
                     count="78"
                     extra="il y a 15 min"
                     icon={<Bolt/>}
                     ac = "puissancem"
                       />
            </Link>
            </Grid>

            <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />

            {/* row 2 */}
             <Grid item xs={12} md={7} lg={8}>
                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item>
                        <Typography variant="h5">Unique Visitor</Typography>
                    </Grid>
                    <Grid item>
                        <Stack direction="row" alignItems="center" spacing={0}>
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
                        </Stack>
                    </Grid>
                </Grid>
                <MainCard content={false} sx={{ mt: 1.5 }}>
                    <Box sx={{ pt: 1, pr: 2 }}>
                        <IncomeAreaChart slot={slot} />
                    </Box>
                </MainCard>
            </Grid>

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
                            <Typography variant="h3">$7,650</Typography>
                        </Stack>
                    </Box>
                    <MonthlyBarChart />
                </MainCard>
            </Grid> 

            {/* row 3 */}
         <Grid item xs={12} md={6} lg={6}>
                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item>
                        <Typography variant="h5">Table des utilisateurs</Typography>
                    </Grid>
                    <Grid item />
                </Grid>
                <MainCard sx={{ mt: 2 }} content={false}>
                    <UsersTable />
                </MainCard>
            </Grid>
 
            <Grid item xs={12} md={5} lg={12}>
                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item>
                        <Typography variant="h5">Table des capteurs</Typography>
                    </Grid>
                    <Grid item />
                </Grid>
                <MainCard sx={{ mt: 2 }} content={false}>
                    {/* <List sx={{ p: 0, '& .MuiListItemButton-root': { py: 2 } }}>
                        <ListItemButton divider>
                            <ListItemText primary="Company Finance Growth" />
                            <Typography variant="h5">+45.14%</Typography>
                        </ListItemButton>
                        <ListItemButton divider>
                            <ListItemText primary="Company Expenses Ratio" />
                            <Typography variant="h5">0.58%</Typography>
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemText primary="Business Risk Cases" />
                            <Typography variant="h5">Low</Typography>
                        </ListItemButton>
                    </List> 
                     <ReportAreaChart />*/}
                        <CapteursTable />
                </MainCard>
            </Grid> 

            {/* row 4 */}
         <Grid item xs={12} md={7} lg={8}>
                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item>
                        <Typography variant="h5">Sales Report</Typography>
                    </Grid>
                    <Grid item>
                        <TextField
                            id="standard-select-currency"
                            size="small"
                            select
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            sx={{ '& .MuiInputBase-input': { py: 0.5, fontSize: '0.875rem' } }}
                        >
                            {status.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                </Grid>
                <MainCard sx={{ mt: 1.75 }}>
                    <Stack spacing={1.5} sx={{ mb: -12 }}>
                        <Typography variant="h6" color="secondary">
                            Net Profit
                        </Typography>
                        <Typography variant="h4">$1560</Typography>
                    </Stack>
                    <SalesColumnChart />
                </MainCard>
            </Grid>
            
            <Grid item xs={12} md={5} lg={4}>
                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item>
                        <Typography variant="h5">Transaction History</Typography>
                    </Grid>
                    <Grid item />
                </Grid>
                <MainCard sx={{ mt: 2 }} content={false}>
                    <List
                        component="nav"
                        sx={{
                            px: 0,
                            py: 0,
                            '& .MuiListItemButton-root': {
                                py: 1.5,
                                '& .MuiAvatar-root': avatarSX,
                                '& .MuiListItemSecondaryAction-root': { ...actionSX, position: 'relative' }
                            }
                        }}
                    >
                        <ListItemButton divider>
                            <ListItemAvatar>
                                <Avatar
                                    sx={{
                                        color: 'success.main',
                                        bgcolor: 'success.lighter'
                                    }}
                                >
                                    <GiftOutlined />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={<Typography variant="subtitle1">Order #002434</Typography>} secondary="Today, 2:00 AM" />
                            <ListItemSecondaryAction>
                                <Stack alignItems="flex-end">
                                    <Typography variant="subtitle1" noWrap>
                                        + $1,430
                                    </Typography>
                                    <Typography variant="h6" color="secondary" noWrap>
                                        78%
                                    </Typography>
                                </Stack>
                            </ListItemSecondaryAction>
                        </ListItemButton>
                        <ListItemButton divider>
                            <ListItemAvatar>
                                <Avatar
                                    sx={{
                                        color: 'primary.main',
                                        bgcolor: 'primary.lighter'
                                    }}
                                >
                                    <MessageOutlined />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary={<Typography variant="subtitle1">Order #984947</Typography>}
                                secondary="5 August, 1:45 PM"
                            />
                            <ListItemSecondaryAction>
                                <Stack alignItems="flex-end">
                                    <Typography variant="subtitle1" noWrap>
                                        + $302
                                    </Typography>
                                    <Typography variant="h6" color="secondary" noWrap>
                                        8%
                                    </Typography>
                                </Stack>
                            </ListItemSecondaryAction>
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemAvatar>
                                <Avatar
                                    sx={{
                                        color: 'error.main',
                                        bgcolor: 'error.lighter'
                                    }}
                                >
                                    <SettingOutlined />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={<Typography variant="subtitle1">Order #988784</Typography>} secondary="7 hours ago" />
                            <ListItemSecondaryAction>
                                <Stack alignItems="flex-end">
                                    <Typography variant="subtitle1" noWrap>
                                        + $682
                                    </Typography>
                                    <Typography variant="h6" color="secondary" noWrap>
                                        16%
                                    </Typography>
                                </Stack>
                            </ListItemSecondaryAction>
                        </ListItemButton>
                    </List>
                </MainCard>
                <MainCard sx={{ mt: 2 }}>
                    <Stack spacing={3}>
                        <Grid container justifyContent="space-between" alignItems="center">
                            <Grid item>
                                <Stack>
                                    <Typography variant="h5" noWrap>
                                        Help & Support Chat
                                    </Typography>
                                    <Typography variant="caption" color="secondary" noWrap>
                                        Typical replay within 5 min
                                    </Typography>
                                </Stack>
                            </Grid>
                            <Grid item>
                                <AvatarGroup sx={{ '& .MuiAvatar-root': { width: 32, height: 32 } }}>
                                    <Avatar alt="Remy Sharp" src={avatar1} />
                                    <Avatar alt="Travis Howard" src={avatar2} />
                                    <Avatar alt="Cindy Baker" src={avatar3} />
                                    <Avatar alt="Agnes Walker" src={avatar4} />
                                </AvatarGroup>
                            </Grid>
                        </Grid>
                        <Button size="small" variant="contained" sx={{ textTransform: 'capitalize' }}>
                            Need Help?
                        </Button>
                    </Stack>
                </MainCard>
            </Grid> 
             
        </Grid>
    );
};

export default DashboardDefault;
