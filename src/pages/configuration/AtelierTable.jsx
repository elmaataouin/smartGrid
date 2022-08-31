import React from 'react'
import { DataGrid, GridToolbarContainer, GridToolbarExport, GridToolbar } from '@mui/x-data-grid';
import img1 from 'assets/images/users/avatar-nassime.jpg'
import './Table.css'
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DeleteIcon from '@mui/icons-material/Delete';
import Dot from 'components/@extended/Dot';


import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { useDemoData } from '@mui/x-data-grid-generator';

import EditDialogAtelier from 'components/Modal/EditUser/EditDialog'
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import EditDialog from 'components/Modal/EditUser/EditDialog';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Typography, Stack } from '@mui/material';

import ConfiDialog from 'components/Modal/Atelier/ConfigAtelier/ConfigDialog';


const OrderStatus = ({ status }) => {
  let color;
  let title;

  switch (status) {
    case 0:
      color = 'success';
      title = 'on';
      break;
    case 1:
      color = 'error';
      title = 'off';
      break;
    default:
      color = 'primary';
      title = 'None';
  }

  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Dot color={color} />
      <Typography>{title}</Typography>
    </Stack>
  );
};

export default function Ateliers() {

  const columns = [

    {
      field: 'id',
      headerName: 'ID',
      headerClassName: 'super-app-theme--header',
      headerAlign: 'center'

    },
    {
      field: 'nameSensor',
      headerName: 'Name',
      headerClassName: 'super-app-theme--header',
      headerAlign: 'center',
      width: 500

    },
    {
      field: 'user',
      headerName: 'User',
      headerAlign: 'center',
      width: 300,

    },

    {
      field: 'action' ,
                headerName: 'Action',
                headerAlign : 'center', 
                width : 450 , 
                renderCell : ( params ) =>{
                return (

                  <div className='Action-A'>
                    <EditDialogAtelier icon = {<ModeEditIcon/>} data = { params.row }/>
                    <button className='delete'><DeleteIcon/></button>
                    <ConfiDialog icon = {<SettingsIcon/>} data = { params.row }/>

                  </div>
        )
      }
    },
  ];

  const rows = [
    { id: 1, nameSensor: "atelier 1", date: '10-06-2022 10:55:37', status: 1, user: "Nassime" },
    { id: 2, nameSensor: "atelier 2", date: '10-06-2022 10:55:37', status: 0, user: "Nassime" },
    { id: 3, nameSensor: "atelier 3", date: '10-06-2022 10:55:37', status: 1, user: "Nassime" },
    { id: 4, nameSensor: "atelier 4", date: '10-06-2022 10:55:37', status: 1, user: "Nassime" },
    { id: 5, nameSensor: "atelier 5", date: '10-06-2022 10:55:37', status: 1, user: "Nassime" },
    { id: 6, nameSensor: "atelier 6", date: '10-06-2022 10:55:37', status: 0, user: "Nassime" },
    { id: 7, nameSensor: "atelier 7", date: '10-06-2022 10:55:37', status: 1, user: "Nassime" },
    { id: 8, nameSensor: "atelier 8", date: '10-06-2022 10:55:37', status: 1, user: "Nassime" },
    { id: 9, nameSensor: "atelier 9", date: '10-06-2022 10:55:37', status: 1, user: "Nassime" },
    { id: 10, nameSensor: "atelier 10", date: '10-06-2022 10:55:37', status: 0, user: "Nassime" },
    { id: 11, nameSensor: "atelier 11", date: '10-06-2022 10:55:37', status: 1, user: "Nassime" },
    { id: 12, nameSensor: "atelier 12", date: '10-06-2022 10:55:37', status: 1, user: "Nassime" },



  ];

  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarExport />
      </GridToolbarContainer>
    );
  }

  return (

    <div style={{ height: 600 }}>
      <DataGrid
        sx={
          {

            '.MuiDataGrid-columnHeader ': {
              background: '#607d8b            ',
              color: '#fff',
              fontSize: '15px',
              fontFamily: 'Segoe UI',
              fontWeight: 'bold'
            },
            '.MuiDataGrid-columnHeaderCheckbox': {
              height: 100,
              headerAlign: "center",
              color: "#000"

            },
            '.MuiDataGrid-row': {
              color: '#000',
              background: '#eceff1',
              fontSize: '15px',
              fontFamily: 'Segoe UI',
              fontWeight: 'bold',
            }
          }
        }

        rows={rows}
        disableSelectionOnClick
        columns={columns}
        checkboxSelection
        components={{ Toolbar: GridToolbar }}
        componentsProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
      />
    </div>

  )
}
