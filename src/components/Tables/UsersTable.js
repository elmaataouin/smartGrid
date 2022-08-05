import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid , GridToolbar } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'user',
    headerName: 'User',
    width: 300,
    editable: true,
  },
  {
    field: 'role',
    headerName: 'Role',
    width: 150,
    editable: true,
  },
  {
    field: 'status',
    headerName: 'Status',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'action',
    headerName: 'Action',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.user || ''} ${params.row.role || ''}`,
  },
];

const rows = [
  { id: 1, role: 'Snow', user: 'elmaataouin@gmail.com', status: 35 },
  { id: 2, role: 'Lannister', user: 'Cersei', status: 42 },
  { id: 3, role: 'Lannister', user: 'Jaime', status: 45 },
  { id: 4, role: 'Stark', user: 'Arya', status: 16 },
  { id: 5, role: 'Targaryen', user: 'Daenerys', status: null },
  { id: 6, role: 'Melisandre', user: null, status: 150 },
  { id: 7, role: 'Clifford', user: 'Ferrara', status: 44 },
  { id: 8, role: 'Frances', user: 'Rossini', status: 36 },
  { id: 9, role: 'Roxie', user: 'Harvey', status: 65 },
];

export default function UsersTable() {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pstatusSize={5}
        rowsPerPstatusOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        // components={{ Toolbar: GridToolbar }} 
      />




    </Box>
  );
}
