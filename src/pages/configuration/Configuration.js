// material-ui
import { Typography } from '@mui/material';
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


const Configuration = () => (

    <>


        <Card 
        sx = {
            {
                ml : '150px',
                mr : '150px'
            }
        }>
            <CardHeader title="Users list">
            </CardHeader>
            <Card>
                
                <Box sx={{
                     display: 'flex',
                     justifyContent: 'flex-end',
                     p: 1,
                     m: 1,
                }}>
                   <TextField  sx = {{ px : 0.5 }}  label="Search" type="search"/>
                    
                    <Button variant="outlined" startIcon={<FileUploadIcon />}>
                        Export
                    </Button>

                    <Button variant="contained" startIcon={<AddIcon />}>
                        Add New User
                    </Button>
                     
                </Box>
                {/* <UsersTable /> */}
                <Box content={false}

                
                        sx = {

                            {
                               
                                ml : 5 ,
                                mr : 5 ,
                                mb : 2 ,
                                mt : 2 
                            }
                        } >
                <Table/>
                </Box>


               
            </Card>
        </Card>
    </>

);

export default Configuration;
