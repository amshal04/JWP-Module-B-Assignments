import PageHeader from '../components/ui/PageHeader.jsx'
import { Grid, Paper, Typography } from '@mui/material'
export default function Dashboard(){
  return (
    <>
      <PageHeader title="Dashboard" trail={["Home","Dashboard"]} />
      <Grid container spacing={2}>
        {["Students","Teachers","Classes","Fees"].map((k,i)=> (
          <Grid item xs={12} sm={6} md={3} key={i}>
            <Paper className="p-5 rounded-xl shadow"> 
              <Typography variant="h6">{k}</Typography>
              <Typography variant="body2" className="text-gray-500">Quick stats placeholder</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </>
  )
}
