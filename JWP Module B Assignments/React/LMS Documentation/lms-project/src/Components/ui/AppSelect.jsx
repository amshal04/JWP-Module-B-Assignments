import { TextField, MenuItem } from '@mui/material'
export default function AppSelect({ options=[], ...rest }){
  return (
    <TextField select fullWidth className="mb-4" {...rest}>
      {options.map(o=> <MenuItem key={o.value} value={o.value}>{o.label}</MenuItem>)}
    </TextField>
  )
}
