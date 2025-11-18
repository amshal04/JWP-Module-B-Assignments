import { TextField } from '@mui/material'
export default function AppInput({className='', ...rest}){
  return <TextField fullWidth className={`mb-4 ${className}`} {...rest} />
}