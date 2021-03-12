import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    { field: 'username', headerName: 'username', width: 130 },
    { field: 'email', headerName: 'Email', width: 130 },


];

const rows = [
    {
        id: 19,
        userId: 19,
        firstName: 'Nour',
        lastName: "Baladou",
        username: "Nour",
        email: "Nour@gmail.com",
    },

];

export default function DataTable() {
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
        </div>
    );
}
