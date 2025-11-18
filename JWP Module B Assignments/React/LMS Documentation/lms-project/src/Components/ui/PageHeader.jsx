import { Typography, Breadcrumbs } from '@mui/material'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
export default function PageHeader({ title, trail=[] }){
  return (
    <div className="mb-6">
      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
        {trail.map((t,i)=> <Typography key={i} color={i===trail.length-1?'text.primary':'text.secondary'}>{t}</Typography>)}
      </Breadcrumbs>
      <Typography variant="h4" className="mt-2 font-semibold">{title}</Typography>
    </div>
  )
}