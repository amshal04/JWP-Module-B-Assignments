import { DataGrid } from '@mui/x-data-grid'
export default function AppDataGrid(props){
  return (
    <div style={{ height: props.height||520, width: '100%' }}>
      <DataGrid disableRowSelectionOnClick {...props} />
    </div>
  )
}