import { useState , useEffect} from 'react';
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

import Table from "@mui/material/Table";
import { styled } from '@mui/material/styles';
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { node } from 'prop-types';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#bce6ff",
      color: theme.palette.common.black,
      width : '400px'
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,


    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: "#bce6ff65",
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
  const makeStyle = (status) => {
    if (status === 'null' || status === null) {
      return {
        background: '#ffadad8f',
        color: 'red',

      }
  
    }
    else {
        return {
          background: 'rgb(145 254 159 / 47%)',
          color: 'green',
        }
    
      }
    }
    

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

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [selected, setSelected] = useState({});

    useEffect(() => {
    fetch("http://iot.mascir.ma:4002/equipements")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          setIsLoaded(true);
          setItems(result);
        },
        // Remarque : il faut gérer les erreurs ici plutôt que dans
        // un bloc catch() afin que nous n’avalions pas les exceptions
        // dues à de véritables bugs dans les composants.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])
  if (error) {
    return <div>Erreur : {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Chargement...</div>;
  } else {  return (
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
                <Typography variant="h6">{selected.node}</Typography>
            </Grid>


            <Grid item xs={8} sm={6} md={4} lg={2}>
                <Link onClick={handleOpen} to="" className='lien' style={{ textDecoration: 'none' }} >
                    <AnalyticEcommerce
                        title="phase 1"
                        count=""
                        extra="il y a 15 min"
                        icon={<BoltIcon />}
                        ac="phase"
                />
                        
                </Link>
            </Grid>

            <Grid item xs={8} sm={6} md={4} lg={2}>
                <Link onClick={handleOpen} to="" className='lien' style={{ textDecoration: 'none' }} >
                    <AnalyticEcommerce
                        title="phase 2"
                        count= {selected.phase2}
                        extra="il y a 15 min"
                        icon={<BoltIcon />}
                        ac="phase" />
                </Link>
            </Grid>

            <Grid item xs={8} sm={6} md={4} lg={2}>
                <Link onClick={handleOpen} to="" className='lien' style={{ textDecoration: 'none' }} >
                    <AnalyticEcommerce
                        title="phase 3"
                        count={selected.phase3}
                        extra="il y a 15 min"
                        icon={<BoltIcon />}
                        ac="phase" />
                </Link>
            </Grid>

            <Grid item xs={8} sm={6} md={4} lg={2}>
                <Link onClick={handleOpen} to="" className='lien' style={{ textDecoration: 'none' }} >
                    <AnalyticEcommerce
                        ac="courant"
                        title="Courant 1" count="" extra="il y a 15 min"
                        icon={<ElectricalServicesIcon />}
                    />
                </Link>
            </Grid>

            <Grid item xs={8} sm={6} md={4} lg={2}>
                <Link onClick={handleOpen} to="" className='lien' style={{ textDecoration: 'none' }} >
                    <AnalyticEcommerce icon={<ElectricalServicesIcon />} title="Courant 2" ac="courant" count={selected.courant2} extra="il y a 15 min" />
                </Link>
            </Grid>

            <Grid item xs={8} sm={6} md={4} lg={2}>
                <Link onClick={handleOpen} to="" className='lien' style={{ textDecoration: 'none' }} >
                    <AnalyticEcommerce icon={<ElectricalServicesIcon />} title="Courant 3" ac="courant" count={selected.courant3} extra="il y a 15 min" />
                </Link>
            </Grid>

            <Grid item xs={8} sm={6} md={4} lg={3}>
                <Link onClick={handleOpen} to="" className='lien' style={{ textDecoration: 'none' }} >

                    <AnalyticEcommerce
                        title="Témperature"
                        count={selected.temperature}
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
                        count={selected.humidity}
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
                        count={ selected.volume }
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
                        count={selected.debit}
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
                        count={selected.tension}
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
                        count={selected.courant}
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
                        count={selected.energie}
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
                        count={selected.puissance_moy}
                        extra="il y a 15 min"
                        icon={<Bolt />}
                        ac="puissancem"
                    />
                </Link>
            </Grid>

            <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />
            {/*
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
        */}

            <div className="MainDash">

            <Grid item>
                        <Typography variant="h5" 
                            sx = {
                                {
                                    mt : 2 ,
                                    mb : 2
                                }
                            }>Table des capteurs</Typography>
            </Grid>
                
                <div className="Table">
                  {/* <h3>Noeuds</h3> */}
                  <TableContainer
                    component={Paper}
                    style={{
                      boxShadow: "0px 13px 20px 0px #80808029", height: "500px",
                      // overflow: "scroll",
                    }}
                    sx={{
                        width: '100%',
                        overflowX: 'auto',
                        position: 'relative',
                        display: 'block',
                        maxWidth: '100%',
                        '& td, & th': { whiteSpace: 'nowrap' }
                    }}
                  >
                    <Table stickyHeader aria-label="customized table">
                      <TableHead>
                        <TableRow>
                          <StyledTableCell>Nom</StyledTableCell>
                          <StyledTableCell align="left">ID</StyledTableCell>
                          <StyledTableCell align="left">Dernière modification</StyledTableCell>
                          <StyledTableCell align="left">Status</StyledTableCell>
                          {/* <TableCell align="left"></TableCell> */}
                        </TableRow>
                      </TableHead>
                      <TableBody style={{ color: "white" }}>
                        {items.map((row) => (
                          <StyledTableRow
                            hover

                            onClick={() => setSelected(row)}
                            key={row.name}
                            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                          >
                            <TableCell component="th" scope="row">
                              {row.name}
                            </TableCell>
                            <TableCell align="left">{row.node}</TableCell>
                            <TableCell align="left">{new Date(row.updateAt).toLocaleDateString()} {new Date(row.updateAt).toLocaleTimeString()}</TableCell>
                            <TableCell align="left">
                              <span className="status" style={makeStyle(row.energie)}>{row.energie}</span>
                            </TableCell>
                            {/* <TableCell align="left" className="Details"> <Button variant="link" onClick={handleShow}>Details
                        </Button></TableCell> */}
                          </StyledTableRow>

                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>

                </div>
                {/* <Table nodes={items} /> */}
              </div>


        </Grid>

        

    );
}

};

export default DashboardDefault;
