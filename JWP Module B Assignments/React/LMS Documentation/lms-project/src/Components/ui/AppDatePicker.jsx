import { DatePicker } from '@mui/lab'
import { TextField } from '@mui/material'
export default function AppDatePicker({ label, value, onChange }){
  return (
    <DatePicker label={label} value={value} onChange={onChange} renderInput={(params)=> <TextField fullWidth className="mb-4" {...params} />} />
  )
}