import { Box, Typography, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { tokens } from '../../theme';
import { mockDataTeam } from '../../data/mockData';
import { AdminPanelSettingsOutlined, LockOpenOutlined, SecurityOutlined } from '@mui/icons-material';
import { useState, useEffect } from 'react';
import axios from 'axios';

import Header from '../../components/Header';

function Team() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/employees').then((res) => {
            if(res.status === 200) {
                setData(res.data);
            }
        });
    }, []);
    console.log(data);

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        { field: '_id', headerName: 'ID' },
        { field: 'firstName', headerName: 'NAME', flex: 1, cellClassName: 'name-column--cell' },
        // { field: 'age', headerName: 'AGE', type: 'number', headerAlign: 'left', align: 'left' },
        { field: 'phone', headerName: 'PHONE NUMBER', flex: 1 },
        { field: 'email', headerName: 'EMAIL', flex: 1 },
        // {
        //     field: 'access',
        //     headerName: 'Acess Level',
        //     flex: 1,
        //     renderCell: ({ row: { access } }) => {
        //         return (
        //             <Box
        //                 width="60%"
        //                 m="0 auto"
        //                 p="5px"
        //                 display="flex"
        //                 justifyContent="center"
        //                 backgroundColor={access === 'admin' ? colors.greenAccent[600] : colors.greenAccent[700]}
        //                 borderRadius="4px"
        //             >
        //                 {access === 'admin' && <AdminPanelSettingsOutlined />}
        //                 {access === 'manager' && <SecurityOutlined />}
        //                 {access === 'user' && <LockOpenOutlined />}
        //                 <Typography color={colors.grey[100]} ml="5px">
        //                     {access}
        //                 </Typography>
        //             </Box>
        //         );
        //     },
        // },
    ];

    return (
        <Box m="20px">
            <Header title="TEAM" subtitle="Managing the Team Members" />
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
                }}
            >
                {data ? (<DataGrid rows={data} columns={columns} />) : <div></div>}
            </Box>
        </Box>
    );
}

export default Team;
