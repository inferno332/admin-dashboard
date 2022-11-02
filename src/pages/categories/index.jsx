import React from 'react';
import { useEffect,useState } from 'react';
import { Box } from '@mui/material';
import DataTable from '../../components/DataTable';
import Header from '../../components/Header';



const columns = [
    { field: '_id', headerName: 'Categories ID',width:200 },
    { field: 'name', headerName: 'Category',width:150 },
    { field: 'description', headerName: 'Description',width:500 },
]
const Categories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:9000/categories')
            .then(res => res.json())
            .then(res => setCategories(res))
    }, []);
    console.log(categories);
    return (
        <Box m="20px">
            <Header title="Categories" subtitle="List of Categories" />
            <Box height='75vh'>
                <DataTable rows={categories} columns={columns} getRowId = {row => row._id} />
            </Box>
        </Box>
    );
};

export default Categories;
