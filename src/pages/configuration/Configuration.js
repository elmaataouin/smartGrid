// material-ui
import { Typography , Grid} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
// project import
import React from 'react';
import MainCard from 'components/MainCard';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import UsersTable from 'components/Tables/UsersTable';
import { Box, Button, Card, CardHeader } from '../../../node_modules/@mui/material/index';
import './configuration.css'
import TextField from '@mui/material/TextField';
import Table from 'components/Table/Table';
import SensorTable from 'components/Table/TableDesCapteurs/Table'
import AtelierTable from './AtelierTable'

import AddDialog from '../../components/Modal/addUser/AddDialog';
import AddDialogCapteur from 'components/Modal/Capteur/addCapteur/AddDialog';
import AddDialogAtelier from 'components/Modal/Atelier/addAtelier/AddDialog';


const Configuration = () => (

    <>
        <Box  sx={ { width: { xs: 450, sm: 800, md: 1300, lg: 1400, xl: 1400, }, ml: {   xl: "100px" } } }>
              
               { /* Users Table */ }
                <Grid container alignItems="center" justifyContent="space-between"  sx = {{ p: 1, m: 1 }}>
                    <Grid item>
                    <Typography variant = "h4">Users Table</Typography>
                    </Grid>
                    <Grid item />
                </Grid>

                <Card>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1, m: 1,}}>
                            {/* <TextField sx={{ px: 0.5 }} label="Search" type="search" /> */}
                            <Button variant="outlined" startIcon={<FileUploadIcon />}>Export</Button>
                            <AddDialog />
                    </Box>
                    {/* <UsersTable /> */}
                    <Table />
                </Card>



                { /* Users Table */ }
                <Grid container alignItems="center" justifyContent="space-between"  sx = {{ p: 1, m: 1 }}>
                    <Grid item>
                    <Typography variant = "h4">Sensor table</Typography>
                    </Grid>
                    <Grid item />
                </Grid>

                <Card>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1, m: 1,}}>
                            {/* <TextField sx={{ px: 0.5 }} label="Search" type="search" /> */}
                            <Button 
                                sx = {{
                                    color: '#00c853' ,
                                    borderColor: '#00c853'
                                }}
                                variant="outlined" startIcon={<FileUploadIcon />}>Export</Button>
                            <AddDialogCapteur />
                    </Box>
                    {/* <UsersTable /> */}
                    <SensorTable />
                </Card>


                <Grid container alignItems="center" justifyContent="space-between"  sx = {{ p: 1, m: 1 }}>
                    <Grid item>
                    <Typography variant = "h4">Atelier table</Typography>
                    </Grid>
                    <Grid item />
                </Grid>

                <Card>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1, m: 1,}}>
                            {/* <TextField sx={{ px: 0.5 }} label="Search" type="search" /> */}
                            <Button 
                                sx = {{
                                    color: '#00c853' ,
                                    borderColor: '#00c853'
                                }}
                                variant="outlined" startIcon={<FileUploadIcon />}>Export</Button>
                            <AddDialogAtelier />
                    </Box>
                    {/* <UsersTable /> */}
                    <AtelierTable />
                </Card>
        </Box>
    </>
);
export default Configuration;
