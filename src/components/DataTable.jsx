import React from 'react'
import { DataGrid } from '@mui/x-data-grid'

const DataTable = ({rows,columns,getRowId}) => {
  return (
    <DataGrid rows={rows} columns={columns} getRowId={getRowId} />
  )
}

export default DataTable