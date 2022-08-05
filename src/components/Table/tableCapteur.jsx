import React , { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import  img1  from '../../imgs/img1.png'
import './Table.css'
import  DeleteSharpIcon  from '@mui/icons-material/DeleteSharp';

export default function Table() {

  const [selected, setSelected] = useState({});

   
    const columns = [
        { field :  'id'        ,  headerName: 'ID',       width : 100 },
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        { field :  'capteur'        ,  headerName: 'Capteur',       width : 250 },
        { field: 'data', headerName: 'Data', width: 200 },
         { field: 'date', headerName: 'Date', width: 200 },

        { field: 'action' ,
          headerName: 'Action',
          width: 180, 
          renderCell : ( params ) =>{
          return(
            
            <div className = 'Action'>
            <button className='edit'>Edit</button>
            <DeleteSharpIcon className='delete'/>
            </div>
        )
            }
        },    
      ];
      
      const rows = [
        { id: 1, capteur : "CAPTEUR D'HUMIDITÉ"    , data : null, date:  "21-07-2022 00:00:00"},
        { id: 2, capteur : "CAPTEUR D'INCLINAISON" , data : null, date:  "21-07-2022 00:00:00"},
        { id: 3, capteur : "CAPTEUR D'INCLINAISON" , data : null, date:   "21-07-2022 00:00:00"},
        { id: 4, capteur : "CAPTEUR D'INCLINAISON" , data : null, date:   "'21-07-2022 00:00:0" },
        { id: 5, capteur : "CAPTEUR D'HUMIDITÉ"    , data : null, date:   "21-07-2022 00:00:00"},
        { id: 6, capteur : "CAPTEUR D'HUMIDITÉ"    , data : null, date:   "21-07-2022 00:00:00"},
        { id: 7, capteur : "CAPTEUR D'HUMIDITÉ"    , data : null, date:   "21-07-2022 00:00:00"},
        { id: 8, capteur : "CAPTEUR D'HUMIDITÉ"    , data : null, date:   "21-07-2022 00:00:00"},
        { id: 9, capteur : "CAPTEUR D'HUMIDITÉ"    , data : null, date:   "21-07-2022 00:00:00"},
      ];
      

 return (

    <div style={{ 
         height: 400,
        width: '100%' }}>
    <DataGrid
      style={{


      }}
      onClick={() => setSelected(rows)}
      rows={rows}
      disableSelectionOnClick
      columns={columns}
      pageSize={9}
      rowsPerPageOptions={[5]}
    />

  </div>
        
  )
}
