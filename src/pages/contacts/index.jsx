import { Box, useTheme } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { tokens } from '../../theme';
import { mockDataContacts } from '../../data/mockData';

import Header from '../../components/Header';

function Contacts() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        { field: 'id', headerName: 'ID', flex: 0.5 },
        { field: 'registraId', headerName: 'REGISTRA ID' },
        { field: 'name', headerName: 'NAME', flex: 1, cellClassName: 'name-column--cell' },
        { field: 'age', headerName: 'AGE', type: 'number', headerAlign: 'left', align: 'left' },
        { field: 'phone', headerName: 'PHONE NUMBER', flex: 1 },
        { field: 'email', headerName: 'EMAIL', flex: 1 },
        { field: 'address', headerName: 'ADDRESS', flex: 1 },
        { field: 'city', headerName: 'CITY', flex: 1 },
        { field: 'zipcode', headerName: 'ZIPCODE', flex: 1 },
    ];

    return (
        <Box m="20px">
            <Header title="CONTACTS" subtitle="List of contacts" />
            <Box
                m="40px 0 0 0"
                height="75vh"
                sx={{
                    '& .MuiDataGrid-root': { border: 'none' },
                    '& .MuiDataGrid-cell': { borderBottom: 'none' },
                    '& .name-column--cell': { color: colors.greenAccent[300] },
                    '& .MuiDataGrid-columnHeaders': { backgroundColor: colors.blueAccent[700], borderBottom: 'none' },
                    '& .MuiDataGrid-virtualScroller': { backgroundColor: colors.primary[400] },
                    '& .MuiDataGrid-footerContainer': { backgroundColor: colors.blueAccent[700], borderTop: 'none' },
                    '& .MuiDataGrid-toolbarContainer .MuiButton-text': { color: `${colors.grey[100]} !important` },
                }}
            >
                <DataGrid rows={mockDataContacts} columns={columns} components={{ Toolbar: GridToolbar }} />
            </Box>
        </Box>
    );
}

export default Contacts;
