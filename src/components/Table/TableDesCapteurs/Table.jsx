import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import  img1  from 'assets/images/users/avatar-nassime.jpg'
import './Table.css'
import  DeleteSharpIcon  from '@mui/icons-material/DeleteSharp';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DeleteIcon from '@mui/icons-material/Delete';
import Dot from 'components/@extended/Dot';

import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import EditDialog from 'components/Modal/EditUser/EditDialog';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Typography , Stack }  from '@mui/material';

import ConfiDialog from 'components/Modal/Capteur/configCapteur/ConfigDialog'


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

export default function table() {
   
    const columns = [
        
            { 
                field: 'id', 
                headerName: 'ID',  
                headerClassName: 'super-app-theme--header', 
                headerAlign : 'center'
                
            },
            {   
                field: 'nameSensor', 
                headerName: 'Name',  
                headerClassName: 'super-app-theme--header', 
                headerAlign : 'center',
                width : 300 
                          
            },     
            {       
                field : 'date',
                headerName: 'Dernière modification', 
                headerAlign : 'center',
                width : 248 , 
            },

            {  
                field: 'status', 
                headerName: 'Status', 
                headerAlign : 'center',
                width : 200 , 
                renderCell : ( params ) => {
                  return (
                  <div>
                    <OrderStatus status = { params.row.status }/>
                  </div>
                ); }
            },

            {  
              field: 'user', 
              headerName: 'User', 
              headerAlign : 'center',
              width : 200 , 
          
          },
            
            { 
                field: 'action' ,
                headerName: 'Action',
                headerAlign : 'center', 
                width : 300 , 
                renderCell : ( params ) =>{
                return (

                  <div className='Action'>
                    <EditDialog icon = {<ModeEditIcon/>} data = { params.row }/>
                    <button className='delete'><DeleteIcon/></button>
                    <ConfiDialog icon = {<SettingsIcon/>} data = { params.row }/>
                  </div>
                )
                        }
        },    
      ];
      
      const rows = [
        { id: 1 , nameSensor : "00-oksa-armoire", date : '10-06-2022 10:55:37', status: 1 , user : "Nassime"},
        { id: 2 , nameSensor : "00-oksa-armoire", date : '10-06-2022 10:55:37', status: 0 , user : "Nassime"},
        { id: 3 , nameSensor : "00-oksa-armoire", date : '10-06-2022 10:55:37', status: 1 , user : "Nassime"},


     ];
      

 return (

    <div style={{ height: 600 }}>
    <DataGrid 
      sx = {
        {
          width : '100%' ,

          '.MuiDataGrid-columnHeader ' : {
            background: '#607d8b            ',
            color: '#fff',
            fontSize: '15px',
            fontFamily : 'Segoe UI',
            fontWeight: 'bold'
          },
          '.MuiDataGrid-columnHeaderCheckbox' :	{
            height : 100 ,
            headerAlign :"center",
            color : "#000"
            
          },
          '.MuiDataGrid-row' : {
            color: '#000',
            background : '#eceff1',
            fontSize: '15px',
            fontFamily : 'Segoe UI',
            fontWeight: 'bold',
            }
          }
        }
    
      rows={rows}
      disableSelectionOnClick
      columns={columns}
      checkboxSelection 
    />

  </div>
        
  )
}
