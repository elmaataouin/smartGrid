import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import  img1  from '../../assets/images/users/avatar-nassime.jpg'
import './Table.css'
import  DeleteSharpIcon  from '@mui/icons-material/DeleteSharp';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DeleteIcon from '@mui/icons-material/Delete';

import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import EditDialog from 'components/Modal/EditUser/EditDialog';

const OrderStatus = ({ status }) => {
  let color;
  let title;
  let icon  ;

  switch (status) {
      case 0:
          color = 'warning';
          title = 'Admin';
          icon = <SettingsIcon/>
          break;
      case 1:
          color = 'success';
          title = 'Super-User';
          icon = <ManageAccountsIcon/>

          break;
      case 2:
          color = 'error';
          title = 'User';
          icon = <PersonIcon/>

          break;
      default:
          color = 'primary';
          title = 'None';
          icon : <PersonIcon/>

  }

  return (
      <div className='rolee' >
     <span className='icon'>
     {icon}
      </span> 
      <span className='title'>
      {title}
      </span>

      </div>
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
                filed : 'img' , 
                headerName: 'User',
                width : 550 ,
                headerAlign : 'center',
                renderCell : ( params ) => {
                          return (
                            <div >
                            <div className="userList">
                              <div>
                                <img className="userListImg" src={params.row.avatar} alt="" />
                              </div>
                              <div className='info'>
                                <div className="userName">
                                  {params.row.lastName}
                                </div>
                                <div className="usermail">
                                  <span>elmaataouin@gmail.com</span>
                                </div>
                              </div>
                            </div>
                            </div>
                              )
                      }
        }, 
        {       field : 'role',
                headerName: 'Role', 
                headerAlign : 'center',
                width : 200 , 
                renderCell : ( params ) =>{
                  return (
  
                    <div className='Role'>
                      <OrderStatus status = { params.row.role }/>
                    </div>
                  )
                          } 
                 
        },
        {       field: 'status', 
                headerName: 'Status', 
                headerAlign : 'center',
                width : 200 , 
                renderCell : ( params ) =>{
                  return (
  
                    <div className='Status'>
                                      <span className={`status-${params.row.status}`}>{params.row.status}</span>
                    </div>
                  )
                          }
        },
        { 
                field: 'action' ,
                headerName: 'Action',
                headerAlign : 'center', 
                width : 300 , 
                renderCell : ( params ) =>{
                return (

                  <div className='Action'>
                    <button className='view'><RemoveRedEyeIcon/></button>
                    <EditDialog icon = {<ModeEditIcon/>} data = { params.row }/>



                    <button className='delete'><DeleteIcon/></button>

                  </div>
                )
                        }
        },    
      ];
      
      const rows = [
      { id: 1, avatar : img1 , lastName: 'EL MAATAOUI Nassime', status: 'Active',role: 0 },
      { id: 2, avatar : img1 , lastName: 'Roxie', status: 'suspended',role: 2},
      { id: 3, avatar : img1 , lastName: 'EL MAATAOUI Nassime', status: 'Active',role: 1 },
      { id: 4, avatar : img1 , lastName: 'Roxie', status: 'suspended',role: 1},
      { id: 5, avatar : img1 , lastName: 'EL MAATAOUI Nassime', status: 'Active',role: 0 },
      { id: 6, avatar : img1 , lastName: 'Roxie', status: 'suspended',role: 2},
      { id: 16, avatar : img1 , lastName: 'EL MAATAOUI Nassime', status: 'Active',role: 1 },
      { id: 7, avatar : img1 , lastName: 'Roxie', status: 'suspended',role: 1 },
      { id: 8, avatar : img1 , lastName: 'EL MAATAOUI Nassime', status: 'Active',role: 0 },
      { id: 9, avatar : img1 , lastName: 'Roxie', status: 'suspended',role: 2},
      { id: 10, avatar : img1 , lastName: 'EL MAATAOUI Nassime', status: 'suspended',role: 1 },
      { id: 11, avatar : img1 , lastName: 'Roxie', status: 'suspended',role: 1},
      { id: 12, avatar : img1 , lastName: 'EL MAATAOUI Nassime', status: 'suspended',role: 0 },
      { id: 13, avatar : img1 , lastName: 'Roxie', status: 'suspended',role: 2},
      { id: 14, avatar : img1 , lastName: 'EL MAATAOUI Nassime', status: 'suspended',role: 1 },
      { id: 15, avatar : img1 , lastName: 'Roxie', status: 'suspended',role: 1},
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
