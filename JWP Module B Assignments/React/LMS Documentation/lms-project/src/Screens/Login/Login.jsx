import { useState } from 'react'
import { Card, CardContent, Typography, CircularProgress } from '@mui/material'
import AppInput from '../components/ui/AppInput.jsx'
import AppButton from '../components/ui/AppButton.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../store/slices/authSlice.js'

export default function Login(){
  const [email,setEmail] = useState('admin@example.com')
  const [password,setPassword] = useState('password')
  const { loading, error } = useSelector(s=>s.auth)
  const dispatch = useDispatch()

  const onSubmit = (e)=>{ e.preventDefault(); dispatch(login({email, password})) }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-blue-100">
      <Card className="w-full max-w-md">
        <CardContent>
          <Typography variant="h5" className="mb-4">Login</Typography>
          <form onSubmit={onSubmit}>
            <AppInput label="Email" value={email} onChange={e=>setEmail(e.target.value)} />
            <AppInput label="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
            {error && <p className="text-red-600 text-sm mb-3">{error}</p>}
            <AppButton type="submit" fullWidth disabled={loading}>
              {loading? <CircularProgress size={22} /> : 'Sign In'}
            </AppButton>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}