import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import  img1  from '../../assets/images/imgs/profile.png'
import './Table.css'
import  DeleteSharpIcon  from '@mui/icons-material/DeleteSharp';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DeleteIcon from '@mui/icons-material/Delete';


const OrderStatus = ({ status }) => {
  let color;
  let title;

  switch (status) {
      case 0:
          color = 'warning';
          title = 'Inactive';
          break;
      case 1:
          color = 'success';
          title = 'Active';
          break;
      case 2:
          color = 'error';
          title = 'Suspended';
          break;
      default:
          color = 'primary';
          title = 'None';
  }

  return (
      <>
      {title}
      </>
  );
};

export default function table() {
   
    const columns = [
        
            { 
                field: 'id', 
                headerName: 'ID',  
                width: 150, 
                headerClassName: 'super-app-theme--header', 
                headerAlign : 'center'
            },
            {   
                filed : 'img' , 
                headerName: 'User',
                width : 300,
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
                width: 220,           
                headerAlign : 'center', 
                renderCell : ( params ) =>{
                  return (
  
                    <div className='Action'>
                      <button className='view'><RemoveRedEyeIcon/></button>
                      <button className='edit'><ModeEditIcon/></button>
                      <button className='delete'><DeleteIcon/></button>
  
                    </div>
                  )
                          } 
                 
        },
        {       field: 'status', 
                headerName: 'Status', 
                width: 250  ,   
                headerAlign : 'center',
                renderCell : ( params ) =>{
                  return (
  
                    <div className='Action'>
                      <button className='view'><RemoveRedEyeIcon/></button>
                      <button className='edit'><ModeEditIcon/></button>
                      <button className='delete'><DeleteIcon/></button>
  
                    </div>
                  )
                          }
        },
        { 
                field: 'action' ,
                headerName: 'Action',
                width: 260,
                headerAlign : 'center', 
                renderCell : ( params ) =>{
                return (

                  <div className='Action'>
                    <button className='view'><RemoveRedEyeIcon/></button>
                    <button className='edit'><ModeEditIcon/></button>
                    <button className='delete'><DeleteIcon/></button>

                  </div>
                )
                        }
        },    
      ];
      
      const rows = [
      { id: 1, avatar : img1 , lastName: 'Snow', status: '0',role: '0' },
      { id: 2, avatar : img1 , lastName: 'Roxie', status: '0',role: '2'},
      { id: 3, avatar : img1 , lastName: 'Snow', status: '0',role: '1' },
      { id: 4, avatar : img1 , lastName: 'Roxie', status: '0',role: '1'},
      { id: 5, avatar : img1 , lastName: 'Snow', status: '0',role: '0' },
      { id: 6, avatar : img1 , lastName: 'Roxie', status: '0',role: '2'},
      { id: 1, avatar : img1 , lastName: 'Snow', status: '0',role: '1' },
      { id: 7, avatar : img1 , lastName: 'Roxie', status: '0',role: '1'},
      { id: 8, avatar : img1 , lastName: 'Snow', status: '0',role: '0' },
      { id: 9, avatar : img1 , lastName: 'Roxie', status: '0',role: '2'},
      { id: 10, avatar : img1 , lastName: 'Snow', status: '0',role: '1' },
      { id: 11, avatar : img1 , lastName: 'Roxie', status: '0',role: '1'},
      { id: 12, avatar : img1 , lastName: 'Snow', status: '0',role: '0' },
      { id: 13, avatar : img1 , lastName: 'Roxie', status: '0',role: '2'},
      { id: 14, avatar : img1 , lastName: 'Snow', status: '0',role: '1' },
      { id: 15, avatar : img1 , lastName: 'Roxie', status: '0',role: '1'},
     ];
      

 return (

    <div style={{ height: 400 }}>
    <DataGrid 
      sx = {
        
        {
           border : 1 ,
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
            fontWeight: 'bold'
            
            }
          }
        }
    
      rows={rows}
      disableSelectionOnClick
      columns={columns}
      pageSize={9}
      rowsPerPageOptions={[5]}
      checkboxSelection
    />

  </div>
        
  )
}
