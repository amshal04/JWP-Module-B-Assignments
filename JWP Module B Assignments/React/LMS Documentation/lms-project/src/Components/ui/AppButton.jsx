import { Button } from '@mui/material'
export default function AppButton(props){
  return <Button variant={props.variant||'contained'} size={props.size||'medium'} {...props} />
}